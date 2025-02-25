interface WorldBuilderParams_t {
    "MinDrawVolumeSize": number;
    "BuildBakedLighting": boolean;
    readonly "BakedLightingInfo": BakedLightingInfo_t;
    "CompileTimestamp": number;
    "CompileFingerprint": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WorldBuilderParams_t(ptr_or_class: string|AnySDKClass): WorldBuilderParams_t;