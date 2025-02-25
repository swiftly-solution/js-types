interface CBaseCSGrenadeProjectile {
    "InitialPosition": Vector;
    "InitialVelocity": Vector;
    "Bounces": number;
    "ExplodeEffectTickBegin": number;
    "ExplodeEffectOrigin": Vector;
    "SpawnTime": number;
    "OGSExtraFlags": number;
    "DetonationRecorded": boolean;
    "ItemIndex": number;
    "OriginalSpawnLocation": Vector;
    "LastBounceSoundTime": number;
    "GrenadeSpin": Vector;
    "LastHitSurfaceNormal": Vector;
    "TicksAtZeroVelocity": number;
    "HasEverHitEnemy": boolean;
    readonly "Parent": CBaseGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseCSGrenadeProjectile(ptr_or_class: string|AnySDKClass): CBaseCSGrenadeProjectile;