interface EventServerSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerSimulate_t(ptr_or_class: string|AnySDKClass): EventServerSimulate_t;