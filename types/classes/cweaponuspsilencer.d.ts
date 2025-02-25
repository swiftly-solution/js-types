interface CWeaponUSPSilencer {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponUSPSilencer(ptr_or_class: string|AnySDKClass): CWeaponUSPSilencer;