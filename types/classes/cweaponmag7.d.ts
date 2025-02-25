interface CWeaponMag7 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMag7(ptr_or_class: string|AnySDKClass): CWeaponMag7;