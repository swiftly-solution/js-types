interface EventServerProcessNetworking_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerProcessNetworking_t(ptr_or_class: string|AnySDKClass): EventServerProcessNetworking_t;