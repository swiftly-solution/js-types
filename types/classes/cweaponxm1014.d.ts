interface CWeaponXM1014 {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponXM1014(ptr_or_class: string|AnySDKClass): CWeaponXM1014;