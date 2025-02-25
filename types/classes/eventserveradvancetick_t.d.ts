interface EventServerAdvanceTick_t {
    readonly "Parent": EventAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventServerAdvanceTick_t;