interface EventClientPollNetworking_t {
    "TickCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPollNetworking_t(ptr_or_class: string|AnySDKClass): EventClientPollNetworking_t;