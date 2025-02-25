interface EventClientPauseSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPauseSimulate_t(ptr_or_class: string|AnySDKClass): EventClientPauseSimulate_t;