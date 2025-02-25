interface CWeaponM249 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponM249(ptr_or_class: string|AnySDKClass): CWeaponM249;