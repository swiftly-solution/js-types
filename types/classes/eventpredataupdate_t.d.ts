interface EventPreDataUpdate_t {
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventPreDataUpdate_t(ptr_or_class: string|AnySDKClass): EventPreDataUpdate_t;