interface ParticleControlPointDriver_t {
    "ControlPoint": number;
    "AttachType": number;
    "AttachmentName": string;
    "Offset": Vector;
    "Offset1": QAngle;
    "EntityName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleControlPointDriver_t(ptr_or_class: string|AnySDKClass): ParticleControlPointDriver_t;