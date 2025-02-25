interface CPhysicsSpring {
    "Frequency": number;
    "DampingRatio": number;
    "RestLength": number;
    "NameAttachStart": string;
    "NameAttachEnd": string;
    "Start": Vector;
    "End": Vector;
    "TeleportTick": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsSpring(ptr_or_class: string|AnySDKClass): CPhysicsSpring;