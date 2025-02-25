interface CKnife {
    "FirstAttack": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CKnife(ptr_or_class: string|AnySDKClass): CKnife;