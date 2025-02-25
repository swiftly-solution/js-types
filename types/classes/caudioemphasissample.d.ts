interface CAudioEmphasisSample {
    "Time": number;
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioEmphasisSample(ptr_or_class: string|AnySDKClass): CAudioEmphasisSample;