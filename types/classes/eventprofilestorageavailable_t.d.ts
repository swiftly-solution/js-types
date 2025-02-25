interface EventProfileStorageAvailable_t {
    "SplitScreenSlot": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventProfileStorageAvailable_t(ptr_or_class: string|AnySDKClass): EventProfileStorageAvailable_t;