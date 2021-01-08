export interface GitConfiguration {
    remoteName: string;
    diffRevision: string;
    issueFormat: string;
    virtualTextPrefix: string;
    addGBlameToVirtualText: boolean;
    addGBlameToBufferVar: boolean;
    blameUseRealTime: boolean;
    enableGutters: boolean;
    realtimeGutters: boolean;
    signPriority: number;
    pushArguments: string[];
    splitWindowCommand: string;
    showCommitInFloating: boolean;
    changedSign: {
        text: string;
        hlGroup: string;
    };
    addedSign: {
        text: string;
        hlGroup: string;
    };
    removedSign: {
        text: string;
        hlGroup: string;
    };
    topRemovedSign: {
        text: string;
        hlGroup: string;
    };
    changeRemovedSign: {
        text: string;
        hlGroup: string;
    };
    conflict: {
        currentHlGroup: string;
        incomingHlGroup: string;
    };
    virtualTextSrcId: number;
    conflictSrcId: number;
}
export interface BlameInfo {
    sha: string;
    index: string;
    startLnum: number;
    endLnum: number;
    author?: string;
    time?: string;
    summary?: string;
}
export declare enum ChangeType {
    Add = "add",
    Change = "changed",
    Delete = "delete"
}
export interface Decorator {
    changedDecorator: string;
    conflictedDecorator: string;
    stagedDecorator: string;
    untrackedDecorator: string;
}
export interface Diff {
    changeType: ChangeType;
    start: number;
    end: number;
    head: string;
    removed: {
        start: number;
        count: number;
    };
    added: {
        start: number;
        count: number;
    };
    lines: string[];
}
export interface Conflict {
    start: number;
    sep: number;
    end: number;
    current: string;
    incoming: string;
}
export interface SignInfo {
    lnum: number;
    changeType: ChangeType | 'topdelete' | 'changedelete';
}
export interface FoldSettings {
    foldmethod: string;
    foldlevel: number;
    foldenable: boolean;
}
export declare enum ConflictParseState {
    Initial = 0,
    MatchedStart = 1,
    MatchedSep = 2
}
export declare enum ConflictPart {
    Current = 0,
    Incoming = 1
}
