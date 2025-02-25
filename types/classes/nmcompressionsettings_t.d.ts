interface NmCompressionSettings_t {
    "IsRotationStatic": boolean;
    "IsTranslationStatic": boolean;
    "IsScaleStatic": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmCompressionSettings_t(ptr_or_class: string|AnySDKClass): NmCompressionSettings_t;