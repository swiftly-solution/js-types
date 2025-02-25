interface WeaponPurchaseTracker_t {
    readonly "WeaponPurchases": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WeaponPurchaseTracker_t(ptr_or_class: string|AnySDKClass): WeaponPurchaseTracker_t;