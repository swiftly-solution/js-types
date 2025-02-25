interface CWeaponP250 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponP250(ptr_or_class: string|AnySDKClass): CWeaponP250;