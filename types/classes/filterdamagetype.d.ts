interface FilterDamageType {
    "DamageType": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FilterDamageType(ptr_or_class: string|AnySDKClass): FilterDamageType;