interface CWeaponMP9 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMP9(ptr_or_class: string|AnySDKClass): CWeaponMP9;