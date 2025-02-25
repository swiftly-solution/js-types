interface EventClientAdvanceTick_t {
    readonly "Parent": EventAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventClientAdvanceTick_t;