import { Disposable, Document, FloatFactory, OutputChannel } from 'coc.nvim';
import { ConflictPart, Diff, GitConfiguration } from '../types';
import Git from './git';
import Repo from './repo';
export default class GitBuffer implements Disposable {
    private doc;
    private config;
    readonly relpath: string;
    readonly repo: Repo;
    private git;
    private channel;
    private floatFactory;
    private blameInfo;
    private diffs;
    private conflicts;
    private currentSigns;
    private gitStatus;
    private hasConflicts;
    private foldEnabled;
    private foldSettings;
    private mutex;
    private _disposed;
    refresh: Function & {
        clear(): void;
    };
    constructor(doc: Document, config: GitConfiguration, relpath: string, repo: Repo, git: Git, channel: OutputChannel, floatFactory: FloatFactory);
    get cachedDiffs(): Diff[];
    private _refresh;
    getChunk(line: number): Diff | undefined;
    chunkUndo(): Promise<void>;
    chunkStage(): Promise<void>;
    nextChunk(): Promise<void>;
    prevChunk(): Promise<void>;
    chunkInfo(): Promise<void>;
    showBlameInfo(lnum: number): Promise<void>;
    private diffDocument;
    updateGutters(): void;
    private loadBlames;
    private getBlameInfo;
    diffCached(): Promise<void>;
    nextConflict(): Promise<void>;
    prevConflict(): Promise<void>;
    conflictKeepPart(part: ConflictPart): Promise<void>;
    browser(action?: string, range?: [number, number]): Promise<void>;
    showCommit(): Promise<void>;
    toggleFold(): Promise<void>;
    toggleGutters(enabled: boolean): Promise<void>;
    private parseConflicts;
    private highlightConflicts;
    showDoc(content: string, filetype?: string): Promise<void>;
    private setBufferStatus;
    private getSignName;
    private get showBlame();
    dispose(): void;
}