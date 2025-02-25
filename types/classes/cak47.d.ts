interface CAK47 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAK47(ptr_or_class: string|AnySDKClass): CAK47;