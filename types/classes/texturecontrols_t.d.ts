interface TextureControls_t {
    readonly "FinalTextureScaleU": CParticleCollectionRendererFloatInput;
    readonly "FinalTextureScaleV": CParticleCollectionRendererFloatInput;
    readonly "FinalTextureOffsetU": CParticleCollectionRendererFloatInput;
    readonly "FinalTextureOffsetV": CParticleCollectionRendererFloatInput;
    readonly "FinalTextureUVRotation": CParticleCollectionRendererFloatInput;
    readonly "ZoomScale": CParticleCollectionRendererFloatInput;
    readonly "Distortion": CParticleCollectionRendererFloatInput;
    "RandomizeOffsets": boolean;
    "ClampUVs": boolean;
    "PerParticleBlend": number;
    "PerParticleScale": number;
    "PerParticleOffsetU": number;
    "PerParticleOffsetV": number;
    "PerParticleRotation": number;
    "PerParticleZoom": number;
    "PerParticleDistortion": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TextureControls_t(ptr_or_class: string|AnySDKClass): TextureControls_t;