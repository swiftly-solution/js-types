interface EventServerBeginAsyncPostTickWork_t {
    readonly "Parent": EventPostAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerBeginAsyncPostTickWork_t(ptr_or_class: string|AnySDKClass): EventServerBeginAsyncPostTickWork_t;