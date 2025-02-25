interface CCSGameModeRules {
    readonly "__pChainEntity": CNetworkVarChainer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules(ptr_or_class: string|AnySDKClass): CCSGameModeRules;