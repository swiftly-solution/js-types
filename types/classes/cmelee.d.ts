interface CMelee {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMelee(ptr_or_class: string|AnySDKClass): CMelee;