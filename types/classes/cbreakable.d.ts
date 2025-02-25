interface CBreakable {
    readonly "CPropDataComponent": CPropDataComponent;
    "Material": number;
    readonly "Breaker": CBaseEntity;
    "Explosion": number;
    "SpawnObject": string;
    "PressureDelay": number;
    "MinHealthDmg": number;
    "PropData": string;
    "ImpactEnergyScale": number;
    "OverrideBlockLOS": number;
    readonly "OnBreak": CEntityIOOutput;
    "PerformanceMode": number;
    readonly "PhysicsAttacker": CBasePlayerPawn;
    "LastPhysicsInfluenceTime": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreakable(ptr_or_class: string|AnySDKClass): CBreakable;