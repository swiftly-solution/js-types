interface CFists {
    "PlayingUninterruptableAct": boolean;
    "UninterruptableActivity": number;
    "RestorePrevWep": boolean;
    readonly "WeaponBeforePrevious": CBasePlayerWeapon;
    readonly "WeaponPrevious": CBasePlayerWeapon;
    "DelayedHardPunchIncoming": boolean;
    "DestroyAfterTaunt": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFists(ptr_or_class: string|AnySDKClass): CFists;