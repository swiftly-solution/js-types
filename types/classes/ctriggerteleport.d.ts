interface CTriggerTeleport {
    "Landmark": string;
    "UseLandmarkAngles": boolean;
    "MirrorPlayer": boolean;
    "CheckDestIfClearForPlayer": boolean;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerTeleport(ptr_or_class: string|AnySDKClass): CTriggerTeleport;