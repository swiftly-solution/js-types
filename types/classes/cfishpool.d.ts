interface CFishPool {
    "FishCount": number;
    "MaxRange": number;
    "SwimDepth": number;
    "WaterLevel": number;
    "IsDormant": boolean;
    readonly "VisTimer": CountdownTimer;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFishPool(ptr_or_class: string|AnySDKClass): CFishPool;