interface CWeaponMAC10 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMAC10(ptr_or_class: string|AnySDKClass): CWeaponMAC10;