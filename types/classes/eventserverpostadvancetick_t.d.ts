interface EventServerPostAdvanceTick_t {
    readonly "Parent": EventPostAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerPostAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventServerPostAdvanceTick_t;