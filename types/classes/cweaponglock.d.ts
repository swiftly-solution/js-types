interface CWeaponGlock {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponGlock(ptr_or_class: string|AnySDKClass): CWeaponGlock;