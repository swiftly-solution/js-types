interface ParticleNamedValueConfiguration_t {
    "ConfigName": string;
    "AttachType": number;
    "BoundEntityPath": string;
    "StrEntityScope": string;
    "StrAttachmentName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleNamedValueConfiguration_t(ptr_or_class: string|AnySDKClass): ParticleNamedValueConfiguration_t;