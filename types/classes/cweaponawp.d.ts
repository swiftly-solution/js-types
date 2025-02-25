interface CWeaponAWP {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponAWP(ptr_or_class: string|AnySDKClass): CWeaponAWP;