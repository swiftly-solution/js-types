interface CGameEnd {
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameEnd(ptr_or_class: string|AnySDKClass): CGameEnd;