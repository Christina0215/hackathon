import { SummaryRecord, DEFAULT_SETTINGS } from '../types'

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed, creating context menu...');
    chrome.contextMenus.create({
        id: 'addToPendingQueue',
        title: 'Add to Pending Queue',
        contexts: ['selection'],
        enabled: true
    }, () => {
        if (chrome.runtime.lastError) {
            console.error('Error creating context menu:', chrome.runtime.lastError);
        } else {
            console.log('Context menu created successfully');
        }
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log('Context menu clicked:', info);
    if (info.menuItemId === 'addToPendingQueue' && tab?.id) {
        chrome.tabs.sendMessage(tab.id, {
            type: 'addToPendingQueue',
            text: info.selectionText
        });
    }
});

// 处理自动总结请求
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.type === 'AUTO_SUMMARIZE_PAGE') {
        console.log('Received page content and summary');
        try {
            // 获取设置
            const { settings } = await chrome.storage.sync.get('settings');
            const currentSettings = { ...DEFAULT_SETTINGS, ...settings };

            // 检查是否启用自动总结
            if (!currentSettings.autoSummarize) {
                console.log('Auto summarize is disabled');
                return;
            }

            // 检查是否已经保存过该页面
            const isDuplicate = await isDuplicateRecord(message.pageContent.url);
            if (isDuplicate) {
                console.log('Page already summarized, skipping...');
                return;
            }

            // 创建记录对象，类似 popup 的 handleSave 逻辑
            const record: SummaryRecord = {
                id: Date.now().toString(),
                url: message.pageContent.url,
                title: message.pageContent.title,
                summary: message.summary,
                timestamp: new Date().toISOString()
            };

            // 保存记录，复用 saveRecord 逻辑
            await saveRecord(record);
            console.log('Summary saved successfully:', record);

            // 可选：通知内容脚本保存完成
            if (sender.tab?.id) {
                chrome.tabs.sendMessage(sender.tab.id, {
                    type: 'SUMMARY_SAVED',
                    record
                });
            }

        } catch (error) {
            console.error('Auto summarization failed:', error);
        }
    }
});

// 复用 PopupManager 中的 saveRecord 逻辑
async function saveRecord(record: SummaryRecord) {
    const { records = [] } = await chrome.storage.local.get('records');
    records.push(record);
    await chrome.storage.local.set({ records });
}

// 可选：添加重复检查，避免重复保存同一页面
async function isDuplicateRecord(url: string): Promise<boolean> {
    const { records = [] } = await chrome.storage.local.get('records');
    return records.some((record: SummaryRecord) => record.url === url);
}