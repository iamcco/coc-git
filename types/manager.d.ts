import { Neovim } from 'coc.nvim';
import GitBuffer from './model/buffer';
import Git from './model/git';
import Service from './model/service';
import { Diff } from './types';
export default class DocumentManager {
    private nvim;
    public service: Service;
    private virtualTextSrcId;
    private conflictSrcId;
    private buffers;
    private gitStatus;
    private config;
    private disposables;
    constructor(nvim: Neovim, service: Service, virtualTextSrcId: number, conflictSrcId?: number);
    private loadConfiguration;
    private get enableGutters();
    get git(): Git;
    toggleGutters(): Promise<void>;
    toggleFold(): Promise<void>;
    resolveGitRootFromBufferOrCwd(bufnr: number): Promise<string | undefined>;
    getCurrentChunk(): Promise<Diff>;
    chunkInfo(): Promise<void>;
    nextChunk(): Promise<void>;
    prevChunk(): Promise<void>;
    nextConflict(): Promise<void>;
    prevConflict(): Promise<void>;
    keepCurrent(): Promise<void>;
    keepIncoming(): Promise<void>;
    private conflictKeepPart;
    chunkStage(): Promise<void>;
    chunkUndo(): Promise<void>;
    showCommit(): Promise<void>;
    browser(action?: string, range?: [number, number]): Promise<void>;
    diffCached(): Promise<void>;
    refresh(): void;
    push(args: string[]): Promise<void>;
    private get buffer();
    getBuffer(bufnr: number): GitBuffer | undefined;
    dispose(): void;
}