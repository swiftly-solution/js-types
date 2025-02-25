interface PostProcessingBloomParameters_t {
    "BlendMode": number;
    "BloomStrength": number;
    "ScreenBloomStrength": number;
    "BlurBloomStrength": number;
    "BloomThreshold": number;
    "BloomThresholdWidth": number;
    "SkyboxBloomStrength": number;
    "BloomStartValue": number;
    "BlurWeight": Object;
    "BlurTint": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PostProcessingBloomParameters_t(ptr_or_class: string|AnySDKClass): PostProcessingBloomParameters_t;