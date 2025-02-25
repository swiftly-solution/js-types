interface CTripWireFireProjectile {
    readonly "Parent": CBaseGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTripWireFireProjectile(ptr_or_class: string|AnySDKClass): CTripWireFireProjectile;