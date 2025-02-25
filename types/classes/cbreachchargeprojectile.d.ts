interface CBreachChargeProjectile {
    readonly "Parent": CBaseGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreachChargeProjectile(ptr_or_class: string|AnySDKClass): CBreachChargeProjectile;