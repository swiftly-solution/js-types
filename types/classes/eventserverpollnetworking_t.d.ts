interface EventServerPollNetworking_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerPollNetworking_t(ptr_or_class: string|AnySDKClass): EventServerPollNetworking_t;