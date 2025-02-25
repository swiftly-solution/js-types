interface CWeaponMP7 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMP7(ptr_or_class: string|AnySDKClass): CWeaponMP7;