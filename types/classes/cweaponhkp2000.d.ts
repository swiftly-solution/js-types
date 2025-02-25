interface CWeaponHKP2000 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponHKP2000(ptr_or_class: string|AnySDKClass): CWeaponHKP2000;