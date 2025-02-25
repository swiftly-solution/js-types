interface ParticleControlPointConfiguration_t {
    "Name": string;
    readonly "Drivers": Object;
    readonly "PreviewState": ParticlePreviewState_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleControlPointConfiguration_t(ptr_or_class: string|AnySDKClass): ParticleControlPointConfiguration_t;