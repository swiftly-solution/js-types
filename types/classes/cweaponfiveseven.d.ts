interface CWeaponFiveSeven {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponFiveSeven(ptr_or_class: string|AnySDKClass): CWeaponFiveSeven;