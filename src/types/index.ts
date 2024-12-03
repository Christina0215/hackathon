export interface PageContent {
    text: string;
    html: string;
    main: string | undefined;
    title: string;
    url: string;
}

export interface PendingItem {
    text: string;
    timestamp: number;
}

export interface SummaryRecord {
    id: string;
    url: string;
    title: string;
    summary: string;
    timestamp: string;
}

export interface SummarizerOptions {
    sharedContext: string;
    type: 'key-points' | 'teaser' | 'tl;dr' | 'headline';
    format: 'markdown' | 'text';
    length: 'short' | 'medium' | 'long';
}

export interface Summarizer {
    summarize: (text: string) => Promise<string>;
    summarizeStreaming: (text: string) => ReadableStream;
}

export interface AISettings {
    autoSummarize: boolean;
    promptForSummarize: string;
    typeForSummarize: 'key-points' | 'teaser' | 'tl;dr' | 'headline';
    formatForSummarize: 'markdown' | 'text';
    lengthForSummarize: 'short' | 'medium' | 'long';
    promptForMultiSummarize: string;
    typeForMultiSummarize: 'key-points' | 'teaser' | 'tl;dr' | 'headline';
    formatForMultiSummarize: 'markdown' | 'text';
    lengthForMultiSummarize: 'short' | 'medium' | 'long';
    promptForCompare: string;
    typeForCompare: 'key-points' | 'teaser' | 'tl;dr' | 'headline';
    formatForCompare: 'markdown' | 'text';
    lengthForCompare: 'short' | 'medium' | 'long';
    excludedDomains: string[];
}

export const DEFAULT_SETTINGS: AISettings = {
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