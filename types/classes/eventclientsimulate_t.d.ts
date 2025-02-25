interface EventClientSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientSimulate_t(ptr_or_class: string|AnySDKClass): EventClientSimulate_t;