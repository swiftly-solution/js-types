interface TextureGroup_t {
    "Enabled": boolean;
    "ReplaceTextureWithGradient": boolean;
    "TextureType": number;
    "TextureChannels": number;
    "TextureBlendMode": number;
    readonly "TextureBlend": CParticleCollectionRendererFloatInput;
    readonly "TextureControls": TextureControls_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TextureGroup_t(ptr_or_class: string|AnySDKClass): TextureGroup_t;