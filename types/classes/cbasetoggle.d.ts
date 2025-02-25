interface CBaseToggle {
    "Toggle_state": number;
    "MoveDistance": number;
    "Wait": number;
    "Lip": number;
    "AlwaysFireBlockedOutputs": boolean;
    "Position1": Vector;
    "Position2": Vector;
    "MoveAng": QAngle;
    "Angle1": QAngle;
    "Angle2": QAngle;
    "Height": number;
    readonly "Activator": CBaseEntity;
    "FinalDest": Vector;
    "FinalAngle": QAngle;
    "MovementType": number;
    "Master": string;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseToggle(ptr_or_class: string|AnySDKClass): CBaseToggle;