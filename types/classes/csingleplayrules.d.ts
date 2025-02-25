interface CSingleplayRules {
    "SinglePlayerGameEnding": boolean;
    readonly "Parent": CGameRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSingleplayRules(ptr_or_class: string|AnySDKClass): CSingleplayRules;