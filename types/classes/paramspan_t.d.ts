interface ParamSpan_t {
    readonly "Samples": Object;
    readonly "Param": CAnimParamHandle;
    "ParamType": number;
    "StartCycle": number;
    "EndCycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParamSpan_t(ptr_or_class: string|AnySDKClass): ParamSpan_t;