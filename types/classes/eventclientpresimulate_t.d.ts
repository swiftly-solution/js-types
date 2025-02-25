interface EventClientPreSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPreSimulate_t(ptr_or_class: string|AnySDKClass): EventClientPreSimulate_t;