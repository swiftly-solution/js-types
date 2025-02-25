interface EventAppShutdown_t {
    "Dummy0": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventAppShutdown_t(ptr_or_class: string|AnySDKClass): EventAppShutdown_t;