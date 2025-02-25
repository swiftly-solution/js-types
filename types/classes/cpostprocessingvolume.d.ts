interface CPostProcessingVolume {
    "FadeDuration": number;
    "MinLogExposure": number;
    "MaxLogExposure": number;
    "MinExposure": number;
    "MaxExposure": number;
    "ExposureCompensation": number;
    "ExposureFadeSpeedUp": number;
    "ExposureFadeSpeedDown": number;
    "TonemapEVSmoothingRange": number;
    "Master": boolean;
    "ExposureControl": boolean;
    "Rate": number;
    "TonemapPercentTarget": number;
    "TonemapPercentBrightPixels": number;
    "TonemapMinAvgLum": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPostProcessingVolume(ptr_or_class: string|AnySDKClass): CPostProcessingVolume;