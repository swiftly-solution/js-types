interface BoneDemoCaptureSettings_t {
    "BoneName": string;
    "ErrorSplineRotationMax": number;
    "ErrorSplineTranslationMax": number;
    "ErrorSplineScaleMax": number;
    "ErrorQuantizationRotationMax": number;
    "ErrorQuantizationTranslationMax": number;
    "ErrorQuantizationScaleMax": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function BoneDemoCaptureSettings_t(ptr_or_class: string|AnySDKClass): BoneDemoCaptureSettings_t;