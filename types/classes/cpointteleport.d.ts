interface CPointTeleport {
    "SaveOrigin": Vector;
    "SaveAngles": QAngle;
    "TeleportParentedEntities": boolean;
    "TeleportUseCurrentAngle": boolean;
    readonly "Parent": CServerOnlyPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointTeleport(ptr_or_class: string|AnySDKClass): CPointTeleport;