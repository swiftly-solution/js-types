interface CCSGameModeRules_Noop {
    readonly "Parent": CCSGameModeRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules_Noop(ptr_or_class: string|AnySDKClass): CCSGameModeRules_Noop;