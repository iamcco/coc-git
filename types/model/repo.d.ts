import { OutputChannel } from 'coc.nvim';
import Git, { IExecutionResult, SpawnOptions } from './git';
import { Decorator, Diff } from '../types';
export default class Repo {
    private git;
    private channel;
    readonly root: string;
    private userName;
    constructor(git: Git, channel: OutputChannel, root: string);
    private getHEAD;
    private hasChanged;
    private getStaged;
    private hasUntracked;
    getStatus(character: string, decorator: Decorator): Promise<string>;
    getDiff(relFilepath: string, content: string, revision?: string): Promise<Diff[]>;
    isIgnored(relativePath: string): Promise<boolean>;
    hasConflicts(relativePath: string): Promise<boolean>;
    isIndexed(relpath: string): Promise<boolean>;
    getUsername(): Promise<string>;
    exec(args: string[], options?: SpawnOptions): Promise<IExecutionResult<string>>;
    safeRun(args: string[], options?: SpawnOptions): Promise<string>;
}
export declare function parseDiff(diffStr: string): Diff[];
