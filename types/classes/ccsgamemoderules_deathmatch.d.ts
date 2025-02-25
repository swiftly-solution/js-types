interface CCSGameModeRules_Deathmatch {
    "DMBonusStartTime": number;
    "DMBonusTimeLength": number;
    "DMBonusWeapon": string;
    readonly "Parent": CCSGameModeRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules_Deathmatch(ptr_or_class: string|AnySDKClass): CCSGameModeRules_Deathmatch;