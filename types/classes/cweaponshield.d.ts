interface CWeaponShield {
    "BulletDamageAbsorbed": number;
    "LastBulletHitSoundTime": number;
    "DisplayHealth": number;
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponShield(ptr_or_class: string|AnySDKClass): CWeaponShield;