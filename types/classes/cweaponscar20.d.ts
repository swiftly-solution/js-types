interface CWeaponSCAR20 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSCAR20(ptr_or_class: string|AnySDKClass): CWeaponSCAR20;