interface CWeaponM4A1 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponM4A1(ptr_or_class: string|AnySDKClass): CWeaponM4A1;