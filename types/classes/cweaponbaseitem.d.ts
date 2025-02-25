interface CWeaponBaseItem {
    readonly "SequenceCompleteTimer": CountdownTimer;
    "Redraw": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponBaseItem(ptr_or_class: string|AnySDKClass): CWeaponBaseItem;