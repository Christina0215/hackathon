import { PendingItem } from '@/types';
import './style.css';

export class FloatingButton {
    private button: HTMLElement | null = null;

    create() {
        const button = document.createElement('div');
        button.id = 'summary-add-button';
        button.innerHTML = `
            <sl-icon name="plus-lg"></sl-icon>
            Add to Summary
        `;
        document.body.appendChild(button);
        return button;
    }

    handleSelection() {
        const selection = window.getSelection();
        if (selection && selection.toString().trim()) {
            if (!this.button) {
                this.button = this.create();
                this.setupClickHandler(selection);
            }
            this.updatePosition(selection);
        } else if (this.button) {
            this.button.style.display = 'none';
        }
    }

    private setupClickHandler(selection: Selection) {
        this.button?.addEventListener('click', () => {
            const selectedText = selection.toString().trim();
            if (selectedText) {
                this.addToPendingQueue(selectedText);
            }
        });
    }

    private async addToPendingQueue(text: string) {
        const { pendingQueue = [] } = await chrome.storage.local.get('pendingQueue');
        pendingQueue.push({
            text,
            timestamp: Date.now()
        });
        await chrome.storage.local.set({ pendingQueue });
        
        if (this.button) {
            this.button.classList.add('success');
            setTimeout(() => {
                this.button?.classList.remove('success');
            }, 1000);
        }
    }

    private updatePosition(selection: Selection) {
        if (!this.button) return;

        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        this.button.style.top = `${rect.bottom + scrollTop + 10}px`;
        this.button.style.left = `${rect.left + scrollLeft}px`;
        this.button.style.display = 'flex';
    }
} 