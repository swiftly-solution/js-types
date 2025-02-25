interface CWeaponBizon {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponBizon(ptr_or_class: string|AnySDKClass): CWeaponBizon;