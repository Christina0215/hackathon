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