interface CMolotovProjectile {
    "IsIncGrenade": boolean;
    "Detonated": boolean;
    readonly "StillTimer": IntervalTimer;
    "HasBouncedOffPlayer": boolean;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMolotovProjectile(ptr_or_class: string|AnySDKClass): CMolotovProjectile;