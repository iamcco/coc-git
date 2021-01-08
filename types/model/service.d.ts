import { Document } from 'coc.nvim';
import GitRepo from './repo';
import Git from './git';
import GitResolver from './resolver';
import GitBuffer from './buffer';
import { IGit } from '../util';
import { GitConfiguration } from '../types';
export default class GitService {
    private _git;
    private _resolver;
    private repos;
    private outputChannel;
    private floatFactory;
    constructor(gitInfo: IGit);
    getRepoFromRoot(root: string): GitRepo;
    createBuffer(doc: Document, config: GitConfiguration): Promise<GitBuffer | undefined>;
    getCurrentRepo(): Promise<GitRepo | undefined>;
    get resolver(): GitResolver;
    get git(): Git;
    log(text: string): void;
    dispose(): void;
}
