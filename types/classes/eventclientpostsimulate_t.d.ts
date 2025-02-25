interface EventClientPostSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPostSimulate_t(ptr_or_class: string|AnySDKClass): EventClientPostSimulate_t;