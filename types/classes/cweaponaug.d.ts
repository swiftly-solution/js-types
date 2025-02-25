interface CWeaponAug {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponAug(ptr_or_class: string|AnySDKClass): CWeaponAug;