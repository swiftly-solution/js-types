interface CEnvParticleGlow {
    "AlphaScale": number;
    "RadiusScale": number;
    "SelfIllumScale": number;
    "ColorTint": Color;
    readonly "Parent": CParticleSystem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvParticleGlow(ptr_or_class: string|AnySDKClass): CEnvParticleGlow;