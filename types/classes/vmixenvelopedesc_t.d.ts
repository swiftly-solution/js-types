interface VMixEnvelopeDesc_t {
    "AttackTimeMS": number;
    "HoldTimeMS": number;
    "ReleaseTimeMS": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixEnvelopeDesc_t(ptr_or_class: string|AnySDKClass): VMixEnvelopeDesc_t;