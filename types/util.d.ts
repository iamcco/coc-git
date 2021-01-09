/// <reference types="node" />
import { ExecOptions } from 'child_process';
import { Event } from 'coc.nvim';
export interface IGit {
    path: string;
    version: string;
}
export declare function wait(ms: number): Promise<any>;
export declare function shellescape(s: string): string;
export declare function toUnixSlash(fsPath: string): string;
export declare function safeRun(cmd: string, opts?: ExecOptions): Promise<string>;
export declare function spawnCommand(cmd: string, args: string[], cwd: string): Promise<string>;
export declare function runCommand(cmd: string, opts?: ExecOptions, timeout?: number): Promise<string>;
export declare function getStdout(cmd: string, opts?: ExecOptions, timeout?: number): Promise<string>;
export declare function equals(one: any, other: any): boolean;
export declare function getUrl(remote: string, branch: string, filepath: string, lines?: number[] | string): string;
export declare function cpErrorHandler(cb: (reason?: any) => void): (reason?: any) => void;
export declare function findGit(hint: string | undefined, onLookup: (path: string) => void): Promise<IGit>;
export declare function onceEvent<T>(event: Event<T>): Event<T>;