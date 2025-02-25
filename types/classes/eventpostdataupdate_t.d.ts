interface EventPostDataUpdate_t {
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventPostDataUpdate_t(ptr_or_class: string|AnySDKClass): EventPostDataUpdate_t;