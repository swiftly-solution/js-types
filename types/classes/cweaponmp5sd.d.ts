interface CWeaponMP5SD {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMP5SD(ptr_or_class: string|AnySDKClass): CWeaponMP5SD;