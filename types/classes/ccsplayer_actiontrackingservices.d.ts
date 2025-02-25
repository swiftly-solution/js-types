interface CCSPlayer_ActionTrackingServices {
    readonly "LastWeaponBeforeC4AutoSwitch": CBasePlayerWeapon;
    "IsRescuing": boolean;
    readonly "WeaponPurchasesThisMatch": WeaponPurchaseTracker_t;
    readonly "WeaponPurchasesThisRound": WeaponPurchaseTracker_t;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_ActionTrackingServices(ptr_or_class: string|AnySDKClass): CCSPlayer_ActionTrackingServices;