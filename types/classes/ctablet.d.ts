interface CTablet {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTablet(ptr_or_class: string|AnySDKClass): CTablet;