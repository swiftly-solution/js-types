interface CItem {
    readonly "OnPlayerTouch": CEntityIOOutput;
    readonly "OnPlayerPickup": CEntityIOOutput;
    "ActivateWhenAtRest": boolean;
    readonly "OnCacheInteraction": CEntityIOOutput;
    readonly "OnGlovePulled": CEntityIOOutput;
    "OriginalSpawnOrigin": Vector;
    "OriginalSpawnAngles": QAngle;
    "PhysStartAsleep": boolean;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItem(ptr_or_class: string|AnySDKClass): CItem;