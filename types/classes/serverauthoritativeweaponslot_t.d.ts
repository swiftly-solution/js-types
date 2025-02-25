interface ServerAuthoritativeWeaponSlot_t {
    "Class": number;
    "Slot": number;
    "ItemDefIdx": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ServerAuthoritativeWeaponSlot_t(ptr_or_class: string|AnySDKClass): ServerAuthoritativeWeaponSlot_t;