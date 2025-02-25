interface CWeaponFamas {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponFamas(ptr_or_class: string|AnySDKClass): CWeaponFamas;