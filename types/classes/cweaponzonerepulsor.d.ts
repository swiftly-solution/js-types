interface CWeaponZoneRepulsor {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponZoneRepulsor(ptr_or_class: string|AnySDKClass): CWeaponZoneRepulsor;