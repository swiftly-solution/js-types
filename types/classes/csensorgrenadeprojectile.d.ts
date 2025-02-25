interface CSensorGrenadeProjectile {
    "ExpireTime": number;
    "NextDetectPlayerSound": number;
    readonly "DisplayGrenade": CBaseEntity;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSensorGrenadeProjectile(ptr_or_class: string|AnySDKClass): CSensorGrenadeProjectile;