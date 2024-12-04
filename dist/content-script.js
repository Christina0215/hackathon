/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/types/index.ts
const DEFAULT_SETTINGS = {
    autoSummarize: false,
    promptForSummarize: "Please summarize the following content, extract the key points and main ideas. Present the summary in a clear and concise way.",
    typeForSummarize: 'tl;dr',
    formatForSummarize: 'markdown',
    lengthForSummarize: 'medium',
    promptForMultiSummarize: "Please summarize these pieces of content together, find common themes and key points. Present a comprehensive summary.",
    typeForMultiSummarize: 'key-points',
    formatForMultiSummarize: 'markdown',
    lengthForMultiSummarize: 'long',
    promptForCompare: "Please compare and analyze the following content, focusing on their similarities, differences, and relationships. Organize your analysis in a clear structure.",
    typeForCompare: 'key-points',
    formatForCompare: 'markdown',
    lengthForCompare: 'long',
    excludedDomains: []
};

;// ./src/scripts/content.ts

document.addEventListener('selectionchange', () => {
    const selection = window.getSelection();
    const hasSelection = selection && selection.toString().trim();
    chrome.runtime.sendMessage({
        type: 'updateContextMenu',
        enabled: !!hasSelection
    });
});
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'addToPendingQueue' && message.text) {
        chrome.storage.local.get('pendingQueue', ({ pendingQueue = [] }) => {
            pendingQueue.push({
                text: message.text,
                timestamp: Date.now()
            });
            chrome.storage.local.set({ pendingQueue });
        });
    }
});
// 添加页面加载完成后的处理
window.onload = async () => {
    console.log('Page loaded, preparing content for summarization');
    try {
        // 获取设置
        const { settings } = await chrome.storage.sync.get('settings');
        const currentSettings = { ...DEFAULT_SETTINGS, ...settings };
        // 检查是否启用自动总结
        if (!currentSettings.autoSummarize) {
            console.log('Auto summarize is disabled');
            return;
        }
        // 检查当前域名是否在排除列表中
        const currentDomain = window.location.hostname;
        if (currentSettings.excludedDomains?.some(domain => currentDomain === domain || currentDomain.endsWith(`.${domain}`))) {
            console.log('Domain is excluded from auto-summarization');
            return;
        }
        // 获取页面内容
        const pageContent = {
            text: document.body.innerText.replace(/\n/g, ' '),
            html: document.body.innerHTML,
            main: document.querySelector('main')?.innerText,
            title: document.title,
            url: window.location.href
        };
        // 使用设置创建摘要器
        const summarizer = await window.ai.summarizer.create({
            sharedContext: currentSettings.promptForSummarize,
            type: currentSettings.typeForSummarize,
            format: currentSettings.formatForSummarize,
            length: currentSettings.lengthForSummarize
        });
        const summary = await summarizer.summarize(pageContent.text);
        // 发送页面内容和摘要到后台进程
        chrome.runtime.sendMessage({
            type: 'AUTO_SUMMARIZE_PAGE',
            pageContent,
            summary
        });
    }
    catch (error) {
        console.error('Error in content script:', error);
    }
};
// 添加总结完成的消息监听器
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'SUMMARY_COMPLETED') {
        console.log('Summary completed:', message.summary);
        // 可以在这里添加一些视觉反馈，比如显示一个通知
    }
});

/******/ })()
;
//# sourceMappingURL=content-script.js.map