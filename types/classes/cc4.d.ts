interface CC4 {
    "LastValidPlayerHeldPosition": Vector;
    "LastValidDroppedPosition": Vector;
    "DoValidDroppedPositionCheck": boolean;
    "StartedArming": boolean;
    "ArmedTime": number;
    "BombPlacedAnimation": boolean;
    "IsPlantingViaUse": boolean;
    readonly "EntitySpottedState": EntitySpottedState_t;
    "SpotRules": number;
    "PlayedArmingBeeps": Object;
    "BombPlanted": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CC4(ptr_or_class: string|AnySDKClass): CC4;