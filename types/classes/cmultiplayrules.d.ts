interface CMultiplayRules {
    readonly "Parent": CGameRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMultiplayRules(ptr_or_class: string|AnySDKClass): CMultiplayRules;