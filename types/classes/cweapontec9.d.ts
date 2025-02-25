interface CWeaponTec9 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponTec9(ptr_or_class: string|AnySDKClass): CWeaponTec9;