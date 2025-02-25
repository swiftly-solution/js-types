interface CWeaponSawedoff {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSawedoff(ptr_or_class: string|AnySDKClass): CWeaponSawedoff;