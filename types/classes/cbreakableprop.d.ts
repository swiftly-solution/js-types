interface CBreakableProp {
    readonly "CPropDataComponent": CPropDataComponent;
    readonly "OnBreak": CEntityIOOutput;
    readonly "OnTakeDamage": CEntityIOOutput;
    "ImpactEnergyScale": number;
    "MinHealthDmg": number;
    "PreferredCarryAngles": QAngle;
    "PressureDelay": number;
    "DefBurstScale": number;
    "DefBurstOffset": Vector;
    readonly "Breaker": CBaseEntity;
    "PerformanceMode": number;
    "PreventDamageBeforeTime": number;
    "BreakableContentsType": number;
    "StrBreakableContentsPropGroupOverride": string;
    "StrBreakableContentsParticleOverride": string;
    "HasBreakPiecesOrCommands": boolean;
    "ExplodeDamage": number;
    "ExplodeRadius": number;
    "ExplosionDelay": number;
    "ExplosionBuildupSound": string;
    "ExplosionCustomEffect": string;
    "ExplosionCustomSound": string;
    "ExplosionModifier": string;
    readonly "PhysicsAttacker": CBasePlayerPawn;
    "LastPhysicsInfluenceTime": number;
    "OriginalBlockLOS": boolean;
    "DefaultFadeScale": number;
    readonly "LastAttacker": CBaseEntity;
    readonly "FlareEnt": CBaseEntity;
    "UsePuntSound": boolean;
    "PuntSound": string;
    "NoGhostCollision": boolean;
    readonly "Parent": CBaseProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreakableProp(ptr_or_class: string|AnySDKClass): CBreakableProp;