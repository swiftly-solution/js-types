interface EventPostAdvanceTick_t {
    "CurrentTick": number;
    "CurrentTickThisFrame": number;
    "TotalTicksThisFrame": number;
    "TotalTicks": number;
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventPostAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventPostAdvanceTick_t;