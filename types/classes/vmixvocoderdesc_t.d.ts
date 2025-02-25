interface VMixVocoderDesc_t {
    "BandCount": number;
    "Bandwidth": number;
    "FldBModGain": number;
    "FreqRangeStart": number;
    "FreqRangeEnd": number;
    "FldBUnvoicedGain": number;
    "AttackTimeMS": number;
    "ReleaseTimeMS": number;
    "DebugBand": number;
    "PeakMode": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixVocoderDesc_t(ptr_or_class: string|AnySDKClass): VMixVocoderDesc_t;