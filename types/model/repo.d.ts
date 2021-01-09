import { OutputChannel } from 'coc.nvim';
import Git, { IExecutionResult, SpawnOptions } from './git';
import { Decorator, Diff } from '../types';
export default class Repo {
    public git;
    public channel;
    readonly root: string;
    public userName;
    constructor(git: Git, channel: OutputChannel, root: string);
    public getHEAD;
    public hasChanged;
    public getStaged;
    public hasUntracked;
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
