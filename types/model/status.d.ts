import { Disposable } from 'coc.nvim';
import GitService from './service';
export default class GitStatus implements Disposable {
    private service;
    private disposables;
    private _enabled;
    private gitStatus;
    private mutex;
    private characters;
    private branchCharacter;
    constructor(service: GitService);
    private refresh;
    private setGitStatus;
    dispose(): void;
}
