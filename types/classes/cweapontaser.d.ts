interface CWeaponTaser {
    "FireTime": number;
    "LastAttackTick": number;
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponTaser(ptr_or_class: string|AnySDKClass): CWeaponTaser;