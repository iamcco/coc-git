import { OutputChannel } from 'coc.nvim';
import Git from './git';
export interface GitDocument {
    uri: string;
    buftype: string;
    schema: string;
}
export default class Resolver {
    private git;
    private channel;
    private resolvedRoots;
    private relativePaths;
    constructor(git: Git, channel: OutputChannel);
    delete(uri: string): void;
    clear(): void;
    getRelativePath(uri: string): string | undefined;
    resolveGitRoot(doc?: GitDocument): Promise<string | null>;
    resolveRootFromCwd(): Promise<string | null>;
    dispose(): void;
}
