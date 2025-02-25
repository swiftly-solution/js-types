interface CGunTarget {
    "On": boolean;
    readonly "TargetEnt": CBaseEntity;
    readonly "OnDeath": CEntityIOOutput;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGunTarget(ptr_or_class: string|AnySDKClass): CGunTarget;