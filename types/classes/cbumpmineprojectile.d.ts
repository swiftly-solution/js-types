interface CBumpMineProjectile {
    readonly "Parent": CBaseGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBumpMineProjectile(ptr_or_class: string|AnySDKClass): CBumpMineProjectile;