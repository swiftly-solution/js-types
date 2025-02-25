interface TagSpan_t {
    "TagIndex": number;
    "StartCycle": number;
    "EndCycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TagSpan_t(ptr_or_class: string|AnySDKClass): TagSpan_t;