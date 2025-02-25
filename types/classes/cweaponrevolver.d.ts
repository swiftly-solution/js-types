interface CWeaponRevolver {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponRevolver(ptr_or_class: string|AnySDKClass): CWeaponRevolver;