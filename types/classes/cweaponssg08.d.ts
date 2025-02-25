interface CWeaponSSG08 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSSG08(ptr_or_class: string|AnySDKClass): CWeaponSSG08;