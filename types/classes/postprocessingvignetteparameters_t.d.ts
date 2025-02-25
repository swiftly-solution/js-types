interface PostProcessingVignetteParameters_t {
    "VignetteStrength": number;
    "Center": Vector2D;
    "Radius": number;
    "Roundness": number;
    "Feather": number;
    "ColorTint": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PostProcessingVignetteParameters_t(ptr_or_class: string|AnySDKClass): PostProcessingVignetteParameters_t;