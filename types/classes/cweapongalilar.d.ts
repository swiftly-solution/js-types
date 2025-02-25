interface CWeaponGalilAR {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponGalilAR(ptr_or_class: string|AnySDKClass): CWeaponGalilAR;