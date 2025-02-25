interface CBaseRendererSource2 {
    readonly "RadiusScale": CParticleCollectionRendererFloatInput;
    readonly "AlphaScale": CParticleCollectionRendererFloatInput;
    readonly "RollScale": CParticleCollectionRendererFloatInput;
    readonly "Alpha2Field": ParticleAttributeIndex_t;
    readonly "ColorScale": CParticleCollectionRendererVecInput;
    "ColorBlendType": number;
    "ShaderType": number;
    "StrShaderOverride": string;
    readonly "CenterXOffset": CParticleCollectionRendererFloatInput;
    readonly "CenterYOffset": CParticleCollectionRendererFloatInput;
    "BumpStrength": number;
    "CropTextureOverride": number;
    readonly "TexturesInput": Object;
    "AnimationRate": number;
    "AnimationType": number;
    "AnimateInFPS": boolean;
    readonly "MotionVectorScaleU": CParticleCollectionRendererFloatInput;
    readonly "MotionVectorScaleV": CParticleCollectionRendererFloatInput;
    readonly "SelfIllumAmount": CParticleCollectionRendererFloatInput;
    readonly "DiffuseAmount": CParticleCollectionRendererFloatInput;
    readonly "DiffuseClamp": CParticleCollectionRendererFloatInput;
    "LightingControlPoint": number;
    readonly "SelfIllumPerParticle": ParticleAttributeIndex_t;
    "OutputBlendMode": number;
    "GammaCorrectVertexColors": boolean;
    "SaturateColorPreAlphaBlend": boolean;
    readonly "AddSelfAmount": CParticleCollectionRendererFloatInput;
    readonly "Desaturation": CParticleCollectionRendererFloatInput;
    readonly "OverbrightFactor": CParticleCollectionRendererFloatInput;
    "HSVShiftControlPoint": number;
    "FogType": number;
    readonly "FogAmount": CParticleCollectionRendererFloatInput;
    "TintByFOW": boolean;
    "TintByGlobalLight": boolean;
    "PerParticleAlphaReference": number;
    "PerParticleAlphaRefWindow": number;
    "AlphaReferenceType": number;
    readonly "AlphaReferenceSoftness": CParticleCollectionRendererFloatInput;
    readonly "SourceAlphaValueToMapToZero": CParticleCollectionRendererFloatInput;
    readonly "SourceAlphaValueToMapToOne": CParticleCollectionRendererFloatInput;
    "Refract": boolean;
    "RefractSolid": boolean;
    readonly "RefractAmount": CParticleCollectionRendererFloatInput;
    "RefractBlurRadius": number;
    "RefractBlurType": number;
    "OnlyRenderInEffectsBloomPass": boolean;
    "OnlyRenderInEffectsWaterPass": boolean;
    "UseMixedResolutionRendering": boolean;
    "OnlyRenderInEffecsGameOverlay": boolean;
    "StencilTestID": string;
    "StencilTestExclude": boolean;
    "StencilWriteID": string;
    "WriteStencilOnDepthPass": boolean;
    "WriteStencilOnDepthFail": boolean;
    "ReverseZBuffering": boolean;
    "DisableZBuffering": boolean;
    "FeatheringMode": number;
    readonly "FeatheringMinDist": CParticleCollectionRendererFloatInput;
    readonly "FeatheringMaxDist": CParticleCollectionRendererFloatInput;
    readonly "FeatheringFilter": CParticleCollectionRendererFloatInput;
    readonly "DepthBias": CParticleCollectionRendererFloatInput;
    "SortMethod": number;
    "BlendFramesSeq0": boolean;
    "MaxLuminanceBlendingSequence0": boolean;
    readonly "Parent": CParticleFunctionRenderer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseRendererSource2(ptr_or_class: string|AnySDKClass): CBaseRendererSource2;