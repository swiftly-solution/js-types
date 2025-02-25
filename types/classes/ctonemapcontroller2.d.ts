interface CTonemapController2 {
    "AutoExposureMin": number;
    "AutoExposureMax": number;
    "TonemapPercentTarget": number;
    "TonemapPercentBrightPixels": number;
    "TonemapMinAvgLum": number;
    "ExposureAdaptationSpeedUp": number;
    "ExposureAdaptationSpeedDown": number;
    "TonemapEVSmoothingRange": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTonemapController2(ptr_or_class: string|AnySDKClass): CTonemapController2;