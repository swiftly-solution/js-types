interface thinkfunc_t {
    "Context": number;
    "NextThinkTick": number;
    "LastThinkTick": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function thinkfunc_t(ptr_or_class: string|AnySDKClass): thinkfunc_t;