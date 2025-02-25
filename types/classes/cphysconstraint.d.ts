interface CPhysConstraint {
    "NameAttach1": string;
    "NameAttach2": string;
    readonly "Attach1": CBaseEntity;
    readonly "Attach2": CBaseEntity;
    "NameAttachment1": string;
    "NameAttachment2": string;
    "BreakSound": string;
    "ForceLimit": number;
    "TorqueLimit": number;
    "TeleportTick": number;
    "MinTeleportDistance": number;
    "SnapObjectPositions": boolean;
    readonly "OnBreak": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysConstraint(ptr_or_class: string|AnySDKClass): CPhysConstraint;