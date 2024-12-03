import { initShoelace } from '@/utils/shoelace';
import type { SlAlert, SlDialog, SlCheckbox } from '@shoelace-style/shoelace';
import aiService from '@/services/ai-service';
import { marked } from 'marked';
import { SummaryRecord, DEFAULT_SETTINGS } from '@/types';
import './style.css';

// 初始化 Shoelace
initShoelace();

document.addEventListener('DOMContentLoaded', async function () {
    let selectedRecords: string[] = [];
    let records: SummaryRecord[] = [];
    let searchQuery = '';
    let sortOrder: 'newest' | 'oldest' = 'newest';
    let startTime: string = '';
    let endTime: string = '';

    // 添加时间筛选器事件监听
    const startTimeInput = document.getElementById('startTime') as HTMLInputElement;
    const endTimeInput = document.getElementById('endTime') as HTMLInputElement;

    startTimeInput?.addEventListener('sl-change', (e: Event) => {
        const input = e.target as any;
        startTime = input.value;
        renderRecords();
    });

    endTimeInput?.addEventListener('sl-change', (e: Event) => {
        const input = e.target as any;
        endTime = input.value;
        renderRecords();
    });

    // 更新选中数量显示
    const updateSelectedCount = () => {
        const countElement = document.querySelector('.selected-count');
        if (countElement) {
            if (selectedRecords.length > 0) {
                countElement.textContent = `(${selectedRecords.length} selected)`;
            } else {
                countElement.textContent = '';
            }
        }
    };

    // 修改全选功能
    const selectAllCheckbox = document.getElementById('selectAll') as SlCheckbox;
    selectAllCheckbox?.addEventListener('sl-change', (e: Event) => {
        const checkbox = e.target as SlCheckbox;
        const isChecked = (checkbox as any).checked;

        document.querySelectorAll('sl-checkbox').forEach((cb: any) => {
            if (cb !== selectAllCheckbox) {
                cb.checked = isChecked;
                const id = cb.dataset.id;
                if (id) {
                    if (isChecked && !selectedRecords.includes(id)) {
                        selectedRecords.push(id);
                    } else if (!isChecked) {
                        selectedRecords = selectedRecords.filter(r => r !== id);
                    }
                }
            }
        });

        updateButtonState(selectedRecords.length);
        updateSelectedCount();
    });

    // 添加搜索和排序事件监听
    const searchInput = document.querySelector('sl-input') as HTMLElement;
    searchInput?.addEventListener('sl-input', (e: Event) => {
        const input = e.target as any;
        searchQuery = input.value?.toLowerCase() || '';
        renderRecords();
    });

    const sortSelect = document.querySelector('sl-select') as HTMLElement;
    sortSelect?.addEventListener('sl-change', (e: Event) => {
        const select = e.target as any;
        sortOrder = select.value;
        renderRecords();
    });

    const renderRecords = async () => {
        const { records: storedRecords } = await chrome.storage.local.get('records') || { records: [] };
        records = storedRecords;

        // 应用所有筛选条件
        let filteredRecords = records.filter(record => {
            const matchesSearch = record.title.toLowerCase().includes(searchQuery) ||
                record.summary.toLowerCase().includes(searchQuery);

            const recordTime = new Date(record.timestamp).getTime();
            const matchesTimeRange = (!startTime || recordTime >= new Date(startTime).getTime()) &&
                (!endTime || recordTime <= new Date(endTime).getTime());

            return matchesSearch && matchesTimeRange;
        });

        // 应用排序
        filteredRecords.sort((a, b) => {
            const timeA = new Date(a.timestamp).getTime();
            const timeB = new Date(b.timestamp).getTime();
            return sortOrder === 'newest' ? timeB - timeA : timeA - timeB;
        });

        const recordsList = document.getElementById('recordsList');
        if (!recordsList) return;

        recordsList.innerHTML = '';

        filteredRecords.forEach(record => {
            const card = document.createElement('sl-card');
            card.className = 'record-card';

            // 格式化时间
            const date = new Date(record.timestamp);
            const formattedDate = date.toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            card.innerHTML = `
        <div slot="header" class="record-header">
            <div class="header-left">
                <sl-checkbox data-id="${record.id}"></sl-checkbox>
                <h3>${record.title}</h3>
            </div>
            <div class="record-time">
                ${formattedDate}
            </div>
        </div>
        <div class="record-content">
            ${marked.parse(record.summary)}
        </div>
        <div slot="footer" class="record-footer">
            <div class="footer-left">
                <sl-tag variant="neutral" size="small">
                    <sl-icon slot="prefix" name="text-paragraph"></sl-icon>
                    ${record.summary.length} characters
                </sl-tag>
            </div>
            <div class="record-actions">
                <sl-button size="small" circle variant="neutral" data-action="copy">
                    <sl-icon name="clipboard"></sl-icon>
                </sl-button>
                <sl-button size="small" circle variant="neutral" data-action="share">
                    <sl-icon name="share"></sl-icon>
                </sl-button>
                <sl-button size="small" circle variant="neutral" data-action="visit" data-url="${record.url}">
                    <sl-icon name="box-arrow-up-right"></sl-icon>
                </sl-button>
                <sl-button size="small" circle variant="danger" data-action="delete" data-id="${record.id}">
                    <sl-icon name="trash"></sl-icon>
                </sl-button>
            </div>
        </div>
      `;

            recordsList.appendChild(card);
        });

        // 更新选中状态和数量
        document.querySelectorAll('sl-checkbox').forEach((checkbox: any) => {
            const id = checkbox.dataset.id;
            if (id && selectedRecords.includes(id)) {
                checkbox.checked = true;
            }
        });

        updateSelectedCount();
    };

    // 初始化渲染
    await renderRecords();

    // 事件监听
    document.addEventListener('click', async (e) => {
        const target = e.target as HTMLElement;

        if (target.closest('[data-action="delete"]')) {
            const button = target.closest('[data-action="delete"]') as HTMLElement;
            const id = button.dataset.id;
            if (!id) return;

            const alert = document.createElement('sl-alert') as SlAlert;
            alert.variant = 'primary';
            alert.closable = true;
            alert.innerHTML = 'Record deleted';

            setTimeout(() => alert.hide(), 3000);

            document.body.appendChild(alert);
            alert.toast();

            records = records.filter(r => r.id !== id);
            await chrome.storage.local.set({ records });
            await renderRecords();
        }

        if (target.closest('[data-action="visit"]')) {
            const button = target.closest('[data-action="visit"]') as HTMLElement;
            const url = button.dataset.url;
            if (url) {
                chrome.tabs.create({ url });
            }
        }

        if (target.closest('[data-action="copy"]')) {
            const button = target.closest('[data-action="copy"]') as HTMLElement;
            const card = button.closest('sl-card');
            const content = card?.querySelector('.record-content')?.textContent;

            if (content) {
                await navigator.clipboard.writeText(content);
                const alert = document.createElement('sl-alert') as SlAlert;
                alert.variant = 'success';
                alert.closable = true;
                alert.innerHTML = 'Copied to clipboard';

                setTimeout(() => alert.hide(), 3000);

                document.body.appendChild(alert);
                alert.toast();
            }
        }

        if (target.closest('[data-action="share"]')) {
            const button = target.closest('[data-action="share"]') as HTMLElement;
            const card = button.closest('sl-card');
            const content = card?.querySelector('.record-content')?.textContent;

            if (content && navigator.share) {
                try {
                    await navigator.share({
                        title: 'Share Summary',
                        text: content
                    });
                } catch (err) {
                    console.error('Share failed:', err);
                }
            }
        }
    });

    // 修改单个 Checkbox 事件
    document.addEventListener('sl-change', (e: Event) => {
        const checkbox = (e.target as HTMLElement).closest('sl-checkbox') as SlCheckbox;
        if (!checkbox || checkbox.id === 'selectAll') return;

        const id = checkbox.dataset.id;
        if (!id) return;

        if ((checkbox as any).checked) {
            selectedRecords.push(id);
        } else {
            selectedRecords = selectedRecords.filter(r => r !== id);
        }

        updateButtonState(selectedRecords.length);
        updateSelectedCount();
    });

    // 修改禁用按钮的逻辑
    const updateButtonState = (selectedCount: number) => {
        const processBtn = document.getElementById('processBtn') as HTMLElement;
        if (processBtn) {
            processBtn.toggleAttribute('disabled', selectedCount < 2);
        }
    };

    // 添加新的事件监听器
    document.addEventListener('sl-select', async e => {
        const menuItem = e.detail.item;
        if (!menuItem) return;

        const selectedContent = records
            .filter(r => selectedRecords.includes(r.id))
            .map(r => r.summary)
            .join('\n\n');

        const dialog = document.createElement('sl-dialog') as SlDialog;
        dialog.label = menuItem.id === 'compareBtn' ? 'Comparison Result' : 'Summary Result';

        // 添加骨架屏和内容容器
        dialog.innerHTML = `
            <div class="dialog-content">
                <div id="dialog-skeleton" class="skeleton-container">
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                </div>
                <div id="dialog-summary" class="summary-content" style="display: none; max-height: 400px; overflow-y: auto;"></div>
            </div>
        `;

        document.body.appendChild(dialog);
        dialog.show();

        try {
            // 获取设置
            const { settings } = await chrome.storage.sync.get('settings');
            const currentSettings = { ...DEFAULT_SETTINGS, ...settings };

            // 根据操作类型选择对应的设置
            const isCompare = menuItem.id === 'compareBtn';
            const options = {
                sharedContext: isCompare ? currentSettings.promptForCompare : currentSettings.promptForMultiSummarize,
                type: isCompare ? currentSettings.typeForCompare : currentSettings.typeForMultiSummarize,
                format: isCompare ? currentSettings.formatForCompare : currentSettings.formatForMultiSummarize,
                length: isCompare ? currentSettings.lengthForCompare : currentSettings.lengthForMultiSummarize
            };

            const summarizer = await aiService.createSummarizer(options);
            const summarizeResultStream = summarizer.summarizeStreaming(selectedContent);

            let outputText = '';
            let previousLength = 0;

            const skeletonElement = dialog.querySelector('#dialog-skeleton');
            const summaryElement = dialog.querySelector('#dialog-summary');

            if (summaryElement) {
                summaryElement.style.display = 'block';
            }

            for await (const segment of summarizeResultStream) {
                if (skeletonElement?.style.display !== 'none') {
                    skeletonElement.style.display = 'none';
                }

                const newContent = segment.slice(previousLength);
                previousLength = segment.length;
                outputText += newContent;

                if (summaryElement) {
                    summaryElement.innerHTML = await marked.parse(outputText);
                }
            }

        } catch (error) {
            const alert = document.createElement('sl-alert') as SlAlert;
            alert.variant = 'danger';
            alert.closable = true;
            alert.innerHTML = 'Operation failed, please try again later';

            document.body.appendChild(alert);
            alert.toast();
            dialog.hide();
        }
    });
}); 