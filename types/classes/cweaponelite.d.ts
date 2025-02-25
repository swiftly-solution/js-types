interface CWeaponElite {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponElite(ptr_or_class: string|AnySDKClass): CWeaponElite;