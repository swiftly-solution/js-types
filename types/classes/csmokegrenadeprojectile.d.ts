interface CSmokeGrenadeProjectile {
    "SmokeEffectTickBegin": number;
    "DidSmokeEffect": boolean;
    "RandomSeed": number;
    "SmokeColor": Vector;
    "SmokeDetonationPos": Vector;
    readonly "VoxelFrameData": Object;
    "VoxelFrameDataSize": number;
    "VoxelUpdate": number;
    "LastBounce": number;
    "FllastSimulationTime": number;
    "ExplodeFromInferno": boolean;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSmokeGrenadeProjectile(ptr_or_class: string|AnySDKClass): CSmokeGrenadeProjectile;