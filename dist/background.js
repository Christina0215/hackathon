/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

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
        }
        else {
            console.log('Context menu created successfully');
        }
    });
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Received message:', message);
    if (message.type === 'updateContextMenu') {
        chrome.contextMenus.update('addToPendingQueue', {
            enabled: message.enabled
        }, () => {
            if (chrome.runtime.lastError) {
                console.error('Error updating context menu:', chrome.runtime.lastError);
            }
            else {
                console.log('Context menu updated:', message.enabled);
            }
        });
    }
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

/******/ })()
;
//# sourceMappingURL=background.js.map