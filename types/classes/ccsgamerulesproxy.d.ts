interface CCSGameRulesProxy {
    readonly "GameRules": CCSGameRules;
    readonly "Parent": CGameRulesProxy;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameRulesProxy(ptr_or_class: string|AnySDKClass): CCSGameRulesProxy;