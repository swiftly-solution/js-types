interface FilterHealth {
    "AdrenalineActive": boolean;
    "HealthMin": number;
    "HealthMax": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FilterHealth(ptr_or_class: string|AnySDKClass): FilterHealth;