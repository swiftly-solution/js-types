interface CWeaponNegev {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponNegev(ptr_or_class: string|AnySDKClass): CWeaponNegev;