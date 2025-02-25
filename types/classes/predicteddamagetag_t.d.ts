interface PredictedDamageTag_t {
    "TagTick": number;
    "FlinchModSmall": number;
    "FlinchModLarge": number;
    "FriendlyFireDamageReductionRatio": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PredictedDamageTag_t(ptr_or_class: string|AnySDKClass): PredictedDamageTag_t;