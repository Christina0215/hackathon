import { initShoelace } from '@/utils/shoelace';
import { AISettings, DEFAULT_SETTINGS } from '@/types';
import './style.css';

initShoelace();

class SettingsManager {
    private settings: AISettings = DEFAULT_SETTINGS;
    private domainInput: any = null;
    private excludedDomainsList: HTMLElement | null = null;

    private async loadSettings() {
        const { settings } = await chrome.storage.sync.get('settings');
        this.settings = { ...DEFAULT_SETTINGS, ...settings };
        this.updateUI();
        console.log('Loaded settings:', this.settings);
    }

    private updateUI() {
        document.querySelectorAll('[name]').forEach((element: any) => {
            const name = element.getAttribute('name') as keyof AISettings;

            if (name && name in this.settings) {
                const value = this.settings[name];

                if (element.tagName === 'SL-SWITCH') {
                    element.checked = value;
                } else if (element.tagName === 'SL-TEXTAREA') {
                    element.setAttribute('value', value)
                } else if (element.tagName === 'SL-SELECT') {
                    element.setAttribute('value', value)
                }
            }
        });
        this.renderExcludedDomains();
    }

    constructor() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.loadSettings();
                this.initializeEventListeners();
            });
        } else {
            this.loadSettings();
            this.initializeEventListeners();
        }
        this.domainInput = document.querySelector('#domainInput');
        this.excludedDomainsList = document.querySelector('#excludedDomainsList');
    }

    private initializeEventListeners() {
        document.getElementById('saveBtn')?.addEventListener('click', async () => {
            await this.saveSettings();
            this.showToast('Settings saved successfully');
        });

        document.getElementById('resetBtn')?.addEventListener('click', async () => {
            this.settings = { ...DEFAULT_SETTINGS };
            await chrome.storage.sync.set({ settings: this.settings });
            this.updateUI();
            this.showToast('Settings reset to default');
        });

        const domainInput = document.querySelector('#domainInput');
        domainInput?.addEventListener('keydown', ((e: KeyboardEvent) => {
            if (e.code === 'Enter') {
                e.preventDefault();
                this.addExcludedDomain();
            }
        }) as EventListener);

        this.excludedDomainsList?.addEventListener('remove-domain', ((e: CustomEvent) => {
            this.removeExcludedDomain(e.detail);
        }) as EventListener);
    }

    private async saveSettings() {
        const newSettings: Partial<AISettings> = {};

        document.querySelectorAll('[name]').forEach((element: any) => {
            const name = element.getAttribute('name') as keyof AISettings;
            if (name && name in this.settings) {
                if (element.tagName === 'SL-SWITCH') {
                    newSettings[name] = element.checked;
                } else {
                    newSettings[name] = element.value;
                }
            }
        });

        this.settings = { ...this.settings, ...newSettings };
        await chrome.storage.sync.set({ settings: this.settings });
    }

    private addExcludedDomain() {
        const domain = this.domainInput?.value?.trim();

        if (!domain) return;

        if (!this.isValidDomain(domain)) {
            this.showToast('Please enter a valid domain', 'danger');
            return;
        }

        if (this.settings.excludedDomains?.includes(domain)) {
            this.showToast('Domain already excluded', 'danger');
            return;
        }

        this.settings.excludedDomains = [
            ...(this.settings.excludedDomains || []),
            domain
        ];

        this.renderExcludedDomains();
        this.domainInput.value = '';
        this.saveSettings();
    }

    private removeExcludedDomain(domain: string) {
        this.settings.excludedDomains = this.settings.excludedDomains?.filter(d => d !== domain);
        this.renderExcludedDomains();
        this.saveSettings();
    }

    private renderExcludedDomains() {
        if (!this.excludedDomainsList) return;

        this.excludedDomainsList.innerHTML = '';
        this.settings.excludedDomains?.forEach(domain => {
            const tag = document.createElement('sl-tag');
            tag.variant = 'neutral';
            tag.size = 'small';
            tag.removable = true;
            tag.innerHTML = domain;

            tag.addEventListener('sl-remove', () => {
                this.removeExcludedDomain(domain);
            });

            this.excludedDomainsList.appendChild(tag);
        });
    }

    private isValidDomain(domain: string): boolean {
        const pattern = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(domain);
    }

    private showToast(message: string, variant: 'success' | 'danger' = 'success') {
        const alert = document.createElement('sl-alert');
        alert.variant = variant;
        alert.closable = true;
        alert.innerHTML = message;

        document.body.appendChild(alert);
        alert.toast();
        setTimeout(() => alert.hide(), 3000);
    }
}

new SettingsManager(); 