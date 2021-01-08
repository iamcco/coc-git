import { ExtensionContext } from 'coc.nvim';
import Manager from './manager';
import Git from './model/git';
import Resolver from './model/resolver';
export interface ExtensionApi {
    git: Git;
    resolver: Resolver;
    manager: Manager;
}
export declare function activate(context: ExtensionContext): Promise<ExtensionApi | undefined>;
