/// <reference types="node" />
import * as cp from 'child_process';
import { CancellationToken, OutputChannel } from 'coc.nvim';
import { IGit } from '../util';
export interface SpawnOptions extends cp.SpawnOptions {
    input?: string;
    encoding?: string;
    log?: boolean;
    cancellationToken?: CancellationToken;
}
export interface IExecutionResult<T extends string | Buffer> {
    exitCode: number;
    stdout: T;
    stderr: string;
}
export default class Git {
    private gitInfo;
    private channel;
    constructor(gitInfo: IGit, channel: OutputChannel);
    getRepositoryRoot(repositoryPath: string): Promise<string>;
    exec(cwd: string, args: string[], options?: SpawnOptions): Promise<IExecutionResult<string>>;
    stream(cwd: string, args: string[], options?: SpawnOptions): cp.ChildProcess;
    private _exec;
    private spawn;
    private log;
}
