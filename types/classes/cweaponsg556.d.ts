interface CWeaponSG556 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSG556(ptr_or_class: string|AnySDKClass): CWeaponSG556;