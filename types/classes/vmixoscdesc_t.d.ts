interface VMixOscDesc_t {
    "OscType": number;
    "Freq": number;
    "Phase": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixOscDesc_t(ptr_or_class: string|AnySDKClass): VMixOscDesc_t;