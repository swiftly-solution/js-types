interface CCSPlayer_WeaponServices {
    "NextAttack": number;
    "IsLookingAtWeapon": boolean;
    "IsHoldingLookAtWeapon": boolean;
    readonly "SavedWeapon": CBasePlayerWeapon;
    "TimeToMelee": number;
    "TimeToSecondary": number;
    "TimeToPrimary": number;
    "TimeToSniperRifle": number;
    "IsBeingGivenItem": boolean;
    "IsPickingUpItemWithUse": boolean;
    "PickedUpWeapon": boolean;
    "DisableAutoDeploy": boolean;
    "IsPickingUpGroundWeapon": boolean;
    "OldShootPositionHistoryCount": number;
    "OldInputHistoryCount": number;
    readonly "Parent": CPlayer_WeaponServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_WeaponServices(ptr_or_class: string|AnySDKClass): CCSPlayer_WeaponServices;