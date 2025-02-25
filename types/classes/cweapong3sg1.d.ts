interface CWeaponG3SG1 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponG3SG1(ptr_or_class: string|AnySDKClass): CWeaponG3SG1;