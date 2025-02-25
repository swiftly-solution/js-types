interface CPhysicsPropRespawnable {
    "OriginalSpawnOrigin": Vector;
    "OriginalSpawnAngles": QAngle;
    "OriginalMins": Vector;
    "OriginalMaxs": Vector;
    "RespawnDuration": number;
    readonly "Parent": CPhysicsProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsPropRespawnable(ptr_or_class: string|AnySDKClass): CPhysicsPropRespawnable;