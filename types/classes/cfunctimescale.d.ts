interface CFuncTimescale {
    "DesiredTimescale": number;
    "Acceleration": number;
    "MinBlendRate": number;
    "BlendDeltaMultiplier": number;
    "IsStarted": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTimescale(ptr_or_class: string|AnySDKClass): CFuncTimescale;