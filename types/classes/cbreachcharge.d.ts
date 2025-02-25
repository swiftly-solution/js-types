interface CBreachCharge {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreachCharge(ptr_or_class: string|AnySDKClass): CBreachCharge;