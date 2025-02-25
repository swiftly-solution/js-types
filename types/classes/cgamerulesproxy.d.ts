interface CGameRulesProxy {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameRulesProxy(ptr_or_class: string|AnySDKClass): CGameRulesProxy;