interface EventAdvanceTick_t {
    "CurrentTick": number;
    "CurrentTickThisFrame": number;
    "TotalTicksThisFrame": number;
    "TotalTicks": number;
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventAdvanceTick_t;