interface TraceSettings_t {
    "TraceHeight": number;
    "TraceRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TraceSettings_t(ptr_or_class: string|AnySDKClass): TraceSettings_t;