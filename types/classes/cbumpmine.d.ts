interface CBumpMine {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBumpMine(ptr_or_class: string|AnySDKClass): CBumpMine;