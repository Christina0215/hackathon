import { SummarizerOptions, Summarizer } from '@/types';

declare global {
    interface Window {
        ai: {
            summarizer: {
                create: (options: SummarizerOptions) => Promise<Summarizer>;
            };
        };
    }
}

export class ChromeAIService {
    async createSummarizer(options: SummarizerOptions): Promise<Summarizer> {
        return await window.ai.summarizer.create(options);
    }
}

export default new ChromeAIService(); 