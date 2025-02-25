interface CWeaponCZ75a {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponCZ75a(ptr_or_class: string|AnySDKClass): CWeaponCZ75a;