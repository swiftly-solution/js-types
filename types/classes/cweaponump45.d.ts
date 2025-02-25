interface CWeaponUMP45 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponUMP45(ptr_or_class: string|AnySDKClass): CWeaponUMP45;