interface CDEagle {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDEagle(ptr_or_class: string|AnySDKClass): CDEagle;