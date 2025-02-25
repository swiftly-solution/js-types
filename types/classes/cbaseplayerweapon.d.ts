interface CBasePlayerWeapon {
    "NextPrimaryAttackTick": number;
    "NextPrimaryAttackTickRatio": number;
    "NextSecondaryAttackTick": number;
    "NextSecondaryAttackTickRatio": number;
    "Clip1": number;
    "Clip2": number;
    "ReserveAmmo": Object;
    readonly "OnPlayerUse": CEntityIOOutput;
    readonly "Parent": CEconEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerWeapon(ptr_or_class: string|AnySDKClass): CBasePlayerWeapon;