interface CParticleModelInput {
    "Type": number;
    "ControlPoint": number;
    readonly "Parent": CParticleInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleModelInput(ptr_or_class: string|AnySDKClass): CParticleModelInput;