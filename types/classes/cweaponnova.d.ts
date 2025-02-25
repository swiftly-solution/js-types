interface CWeaponNOVA {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponNOVA(ptr_or_class: string|AnySDKClass): CWeaponNOVA;