interface CFuncShatterglass {
    readonly "ShatterGlassShards": Object;
    "PanelSize": Vector2D;
    "LastShatterSoundEmitTime": number;
    "LastCleanupTime": number;
    "InitAtTime": number;
    "GlassThickness": number;
    "SpawnInvulnerability": number;
    "BreakSilent": boolean;
    "BreakShardless": boolean;
    "Broken": boolean;
    "GlassNavIgnore": boolean;
    "GlassInFrame": boolean;
    "StartBroken": boolean;
    "InitialDamageType": number;
    "DamagePositioningEntityName01": string;
    "DamagePositioningEntityName02": string;
    "DamagePositioningEntityName03": string;
    "DamagePositioningEntityName04": string;
    readonly "InitialDamagePositions": Object;
    readonly "ExtraDamagePositions": Object;
    readonly "InitialPanelVertices": Object;
    readonly "OnBroken": CEntityIOOutput;
    "SurfaceType": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncShatterglass(ptr_or_class: string|AnySDKClass): CFuncShatterglass;