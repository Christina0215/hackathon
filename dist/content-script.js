/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

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

/******/ })()
;
//# sourceMappingURL=content-script.js.map