interface CBaseGrenade {
    readonly "OnPlayerPickup": CEntityIOOutput;
    readonly "OnExplode": CEntityIOOutput;
    "HasWarnedAI": boolean;
    "IsSmokeGrenade": boolean;
    "IsLive": boolean;
    "DmgRadius": number;
    "DetonateTime": number;
    "WarnAITime": number;
    "Damage": number;
    "BounceSound": string;
    "ExplosionSound": string;
    readonly "Thrower": CCSPlayerPawn;
    "NextAttack": number;
    readonly "OriginalThrower": CCSPlayerPawn;
    readonly "Parent": CBaseFlex;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseGrenade(ptr_or_class: string|AnySDKClass): CBaseGrenade;