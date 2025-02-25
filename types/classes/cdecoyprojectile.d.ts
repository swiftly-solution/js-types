interface CDecoyProjectile {
    "DecoyShotTick": number;
    "ShotsRemaining": number;
    "ExpireTime": number;
    "DecoyWeaponDefIndex": number;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDecoyProjectile(ptr_or_class: string|AnySDKClass): CDecoyProjectile;