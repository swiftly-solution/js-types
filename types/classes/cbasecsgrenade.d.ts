interface CBaseCSGrenade {
    "Redraw": boolean;
    "IsHeldByPlayer": boolean;
    "PinPulled": boolean;
    "JumpThrow": boolean;
    "ThrowAnimating": boolean;
    "ThrowTime": number;
    "ThrowStrength": number;
    "ThrowStrengthApproach": number;
    "DropTime": number;
    "PinPullTime": number;
    "JustPulledPin": boolean;
    "NextHoldTick": number;
    "NextHoldFrac": number;
    readonly "SwitchToWeaponAfterThrow": CCSWeaponBase;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseCSGrenade(ptr_or_class: string|AnySDKClass): CBaseCSGrenade;