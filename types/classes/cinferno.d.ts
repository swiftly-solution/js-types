interface CInferno {
    "FirePositions": Object;
    "FireParentPositions": Object;
    "FireIsBurning": Object;
    "BurnNormal": Object;
    "FireCount": number;
    "InfernoType": number;
    "FireEffectTickBegin": number;
    "FireLifetime": number;
    "InPostEffectTime": boolean;
    "FiresExtinguishCount": number;
    "WasCreatedInSmoke": boolean;
    readonly "Extent": Extent;
    readonly "DamageTimer": CountdownTimer;
    readonly "DamageRampTimer": CountdownTimer;
    "SplashVelocity": Vector;
    "InitialSplashVelocity": Vector;
    "StartPos": Vector;
    "OriginalSpawnLocation": Vector;
    readonly "ActiveTimer": IntervalTimer;
    "FireSpawnOffset": number;
    "MaxFlames": number;
    "SpreadCount": number;
    readonly "BookkeepingTimer": CountdownTimer;
    readonly "NextSpreadTimer": CountdownTimer;
    "SourceItemDefIndex": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInferno(ptr_or_class: string|AnySDKClass): CInferno;