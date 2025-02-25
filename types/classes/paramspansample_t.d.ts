interface ParamSpanSample_t {
    "Cycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParamSpanSample_t(ptr_or_class: string|AnySDKClass): ParamSpanSample_t;