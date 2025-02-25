interface VMixDynamicsBand_t {
    "FldbGainInput": number;
    "FldbGainOutput": number;
    "FldbThresholdBelow": number;
    "FldbThresholdAbove": number;
    "RatioBelow": number;
    "RatioAbove": number;
    "AttackTimeMS": number;
    "ReleaseTimeMS": number;
    "Enable": boolean;
    "Solo": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDynamicsBand_t(ptr_or_class: string|AnySDKClass): VMixDynamicsBand_t;