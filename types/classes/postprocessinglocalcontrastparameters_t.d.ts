interface PostProcessingLocalContrastParameters_t {
    "LocalContrastStrength": number;
    "LocalContrastEdgeStrength": number;
    "LocalContrastVignetteStart": number;
    "LocalContrastVignetteEnd": number;
    "LocalContrastVignetteBlur": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PostProcessingLocalContrastParameters_t(ptr_or_class: string|AnySDKClass): PostProcessingLocalContrastParameters_t;