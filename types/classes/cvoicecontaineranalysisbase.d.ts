interface CVoiceContainerAnalysisBase {
    "RegenerateCurveOnCompile": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerAnalysisBase(ptr_or_class: string|AnySDKClass): CVoiceContainerAnalysisBase;