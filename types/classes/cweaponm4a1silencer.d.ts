interface CWeaponM4A1Silencer {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponM4A1Silencer(ptr_or_class: string|AnySDKClass): CWeaponM4A1Silencer;