import { marked } from 'marked';
import { initShoelace } from '@/utils/shoelace';
import aiService from '@/services/ai-service';
import { PendingQueue } from '@/components/pending-queue';
import { PageContent, SummaryRecord, DEFAULT_SETTINGS, AISettings } from '@/types';
import './style.css';

initShoelace();

class PopupManager {
    private pendingQueue: PendingQueue;
    private saveBtn: HTMLElement | null;
    private contentArea: HTMLElement | null;
    private skeletonElement: Element | null;
    private summaryElement: Element | null;

    constructor() {
        this.pendingQueue = new PendingQueue('pending-queue');
        this.saveBtn = document.getElementById('saveBtn');
        this.contentArea = document.getElementById('content-area');
        this.skeletonElement = document.querySelector('.skeleton-container');
        this.summaryElement = document.getElementById('summary');

        // 添加 storage 变化监听
        chrome.storage.onChanged.addListener((changes) => {
            if (changes.pendingQueue) {
                this.pendingQueue.render();
            }
        });

        this.initializeUI();
        this.initializeEventListeners();
    }

    private initializeEventListeners() {
        document.getElementById('summarizeBtn')?.addEventListener('click', () => this.handleSummarize());
        document.getElementById('saveBtn')?.addEventListener('click', () => this.handleSave());
        document.getElementById('historyBtn')?.addEventListener('click', () => this.openHistory());
        document.getElementById('settingsBtn')?.addEventListener('click', () => this.openSettings());
    }

    private async handleSummarize() {
        try {
            this.updateUIBeforeSummarize();
            const textToSummarize = await this.getTextToSummarize();
            await this.generateAndDisplaySummary(textToSummarize);
        } catch (err) {
            this.handleSummarizeError(err);
        }
    }

    private updateUIBeforeSummarize() {
        this.saveBtn?.classList.add('hidden');
        this.contentArea?.classList.remove('hidden');
        if (this.skeletonElement && this.summaryElement) {
            this.skeletonElement.classList.remove('hidden');
            this.summaryElement.innerHTML = '';
        }
    }

    private async getTextToSummarize(): Promise<string> {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        const { pendingQueue = [] } = await chrome.storage.local.get('pendingQueue');

        if (pendingQueue.length > 0) {
            const text = pendingQueue.map((item: { text: any; }) => item.text).join('\n\n');
            await chrome.storage.local.set({ pendingQueue: [] });
            await this.pendingQueue.render();
            return text;
        }

        if (!tab.id) throw new Error('No active tab found');
        const [{ result }] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (): PageContent => ({
                text: document.body.innerText.replace(/\n/g, ' '),
                html: document.body.innerHTML,
                main: document.querySelector('main')?.innerText,
                title: document.title,
                url: window.location.href
            })
        });
        return result?.text || '';
    }

    private async generateAndDisplaySummary(text: string) {
        if (!text) return;

        // 获取设置
        const { settings } = await chrome.storage.sync.get('settings');
        const currentSettings = { ...DEFAULT_SETTINGS, ...settings };

        const summarizer = await aiService.createSummarizer({
            sharedContext: currentSettings.promptForSummarize,
            type: currentSettings.typeForSummarize,
            format: currentSettings.formatForSummarize,
            length: currentSettings.lengthForSummarize
        });

        const summarizeResultStream = summarizer.summarizeStreaming(text);
        let outputText = '';
        let previousLength = 0;

        for await (const segment of summarizeResultStream) {
            if (this.skeletonElement?.classList.contains('hidden') === false) {
                this.skeletonElement.classList.add('hidden');
            }
            const newContent = segment.slice(previousLength);
            previousLength = segment.length;
            outputText += newContent;
            if (this.summaryElement) {
                this.summaryElement.innerHTML = await marked.parse(outputText);
            }
        }

        this.saveBtn?.classList.remove('hidden');
    }

    private handleSummarizeError(err: unknown) {
        console.error('Failed to summarize:', err);
        if (this.contentArea) {
            this.contentArea.classList.remove('hidden');
        }
        if (this.summaryElement) {
            this.summaryElement.textContent = `Failed to generate summary: ${err instanceof Error ? err.message : String(err)}`;
        }
        this.saveBtn?.classList.add('hidden');
    }

    private async handleSave() {
        if (!this.summaryElement?.textContent || !this.saveBtn) return;

        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        const record: SummaryRecord = {
            id: Date.now().toString(),
            url: tab.url || '',
            title: tab.title || '',
            summary: this.summaryElement.textContent,
            timestamp: new Date().toISOString()
        };

        await this.saveRecord(record);
        this.showSaveSuccess();
    }

    private async saveRecord(record: SummaryRecord) {
        const { records = [] } = await chrome.storage.local.get('records');
        records.push(record);
        await chrome.storage.local.set({ records });
    }

    private showSaveSuccess() {
        const saveBtnIcon = this.saveBtn?.querySelector('sl-icon');
        if (saveBtnIcon && this.saveBtn) {
            this.saveBtn.classList.add('save-success');
            saveBtnIcon.setAttribute('name', 'check-lg');
            setTimeout(() => {
                this.saveBtn?.classList.add('hidden');
            }, 800);
        }
    }

    private openHistory() {
        chrome.tabs.create({ url: 'history.html' });
    }

    private openSettings() {
        chrome.tabs.create({ url: 'settings.html' });
    }

    private async initializeUI() {
        await this.pendingQueue.render();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PopupManager();
}); 