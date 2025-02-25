interface CHEGrenadeProjectile {
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHEGrenadeProjectile(ptr_or_class: string|AnySDKClass): CHEGrenadeProjectile;