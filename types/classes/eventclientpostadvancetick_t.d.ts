interface EventClientPostAdvanceTick_t {
    readonly "Parent": EventPostAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPostAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventClientPostAdvanceTick_t;