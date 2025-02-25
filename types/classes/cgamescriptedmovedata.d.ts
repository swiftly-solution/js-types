interface CGameScriptedMoveData {
    "AccumulatedRootMotion": Vector;
    "Dest": Vector;
    "Src": Vector;
    "Src1": QAngle;
    "Dst": QAngle;
    "Current": QAngle;
    readonly "DestEntity": CBaseEntity;
    "LockedSpeed": number;
    "AngRate": number;
    "Duration": number;
    "StartTime": number;
    "Active": boolean;
    "TeleportOnEnd": boolean;
    "IgnoreRotation": boolean;
    "Type": any;
    "Success": boolean;
    "ForcedCrouchState": number;
    "IgnoreCollisions": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameScriptedMoveData(ptr_or_class: string|AnySDKClass): CGameScriptedMoveData;