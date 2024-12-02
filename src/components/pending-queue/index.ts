import { PendingItem } from '@/types';
import './style.css';

export class PendingQueue {
    private container: HTMLElement;

    constructor(containerId: string) {
        const element = document.getElementById(containerId);
        if (!element) throw new Error(`Container with id ${containerId} not found`);
        this.container = element;
    }

    async render() {
        const { pendingQueue = [] } = await chrome.storage.local.get('pendingQueue');
        this.container.innerHTML = '';

        pendingQueue.forEach((item: PendingItem) => {
            const tag = document.createElement('sl-tag');
            tag.variant = 'neutral';
            tag.removable = true;
            tag.size = 'small';
            tag.textContent = item.text.slice(0, 20) + (item.text.length > 20 ? '...' : '');
            
            tag.addEventListener('sl-remove', async () => {
                const { pendingQueue = [] } = await chrome.storage.local.get('pendingQueue');
                const newQueue = pendingQueue.filter((i: PendingItem) => i.timestamp !== item.timestamp);
                await chrome.storage.local.set({ pendingQueue: newQueue });
                await this.render();
            });

            this.container.appendChild(tag);
        });
    }

    async clear() {
        await chrome.storage.local.set({ pendingQueue: [] });
        await this.render();
    }

    async add(text: string) {
        const { pendingQueue = [] } = await chrome.storage.local.get('pendingQueue');
        pendingQueue.push({
            text,
            timestamp: Date.now()
        });
        await chrome.storage.local.set({ pendingQueue });
        await this.render();
    }
} 