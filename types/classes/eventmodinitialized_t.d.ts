interface EventModInitialized_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventModInitialized_t(ptr_or_class: string|AnySDKClass): EventModInitialized_t;