interface WeaponPurchaseCount_t {
    "ItemDefIndex": number;
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WeaponPurchaseCount_t(ptr_or_class: string|AnySDKClass): WeaponPurchaseCount_t;