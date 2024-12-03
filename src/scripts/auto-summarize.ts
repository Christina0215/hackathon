import aiService from '@/services/ai-service';
import { PageContent, SummaryRecord, DEFAULT_SETTINGS, AISettings } from '@/types';

class AutoSummarizer {
    async initialize() {
        const { settings } = await chrome.storage.sync.get('settings');
        const { autoSummarize } = { ...DEFAULT_SETTINGS, ...settings as AISettings };

        console.log(111, settings, autoSummarize)

        if (autoSummarize) {
            await this.autoSummarizeAndSave();
        }
    }

    private async autoSummarizeAndSave() {
        try {
            const pageContent: PageContent = {
                text: document.body.innerText.replace(/\n/g, ' '),
                html: document.body.innerHTML,
                main: document.querySelector('main')?.innerText,
                title: document.title,
                url: window.location.href
            };

            const { settings } = await chrome.storage.sync.get('settings');
            const currentSettings = { ...DEFAULT_SETTINGS, ...settings };

            const summarizer = await aiService.createSummarizer({
                sharedContext: currentSettings.promptForSummarize,
                type: currentSettings.typeForSummarize,
                format: currentSettings.formatForSummarize,
                length: currentSettings.lengthForSummarize
            });

            const summary = await summarizer.summarize(pageContent.text);
            console.log(111, summary)
            // 保存摘要
            const record: SummaryRecord = {
                id: Date.now().toString(),
                url: pageContent.url,
                title: pageContent.title,
                summary,
                timestamp: new Date().toISOString()
            };

            await this.saveRecord(record);
        } catch (err) {
            console.error('Auto summarize failed:', err);
        }
    }

    private async saveRecord(record: SummaryRecord) {
        const { records = [] } = await chrome.storage.local.get('records');
        records.push(record);
        await chrome.storage.local.set({ records });
    }
}

// 页面加载完成后自动执行
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log(111, 'loaded')
    }, 3000)
    new AutoSummarizer().initialize();
}); 