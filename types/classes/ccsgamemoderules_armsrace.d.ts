interface CCSGameModeRules_ArmsRace {
    readonly "WeaponSequence": Object;
    readonly "Parent": CCSGameModeRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules_ArmsRace(ptr_or_class: string|AnySDKClass): CCSGameModeRules_ArmsRace;