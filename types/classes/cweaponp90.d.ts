interface CWeaponP90 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponP90(ptr_or_class: string|AnySDKClass): CWeaponP90;