interface ParticlePreviewBodyGroup_t {
    "BodyGroupName": string;
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticlePreviewBodyGroup_t(ptr_or_class: string|AnySDKClass): ParticlePreviewBodyGroup_t;