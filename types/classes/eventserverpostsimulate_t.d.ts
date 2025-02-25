interface EventServerPostSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerPostSimulate_t(ptr_or_class: string|AnySDKClass): EventServerPostSimulate_t;