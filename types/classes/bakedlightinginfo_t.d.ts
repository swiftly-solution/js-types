interface BakedLightingInfo_t {
    "LightmapVersionNumber": number;
    "LightmapGameVersionNumber": number;
    "LightmapUvScale": Vector2D;
    "HasLightmaps": boolean;
    "BakedShadowsGamma20": boolean;
    "CompressionEnabled": boolean;
    "ChartPackIterations": number;
    "VradQuality": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function BakedLightingInfo_t(ptr_or_class: string|AnySDKClass): BakedLightingInfo_t;