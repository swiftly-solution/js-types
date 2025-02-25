interface EventClientProcessNetworking_t {
    "TickCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientProcessNetworking_t(ptr_or_class: string|AnySDKClass): EventClientProcessNetworking_t;