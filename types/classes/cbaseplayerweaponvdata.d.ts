interface CBasePlayerWeaponVData {
    "BuiltRightHanded": boolean;
    "AllowFlipping": boolean;
    readonly "MuzzleAttachment": any;
    "LinkedCooldowns": boolean;
    "Flags": number;
    "PrimaryAmmoType": number;
    "SecondaryAmmoType": number;
    "MaxClip1": number;
    "MaxClip2": number;
    "DefaultClip1": number;
    "DefaultClip2": number;
    "ReserveAmmoAsClips": boolean;
    "Weight": number;
    "AutoSwitchTo": boolean;
    "AutoSwitchFrom": boolean;
    "RumbleEffect": number;
    "Slot": number;
    "Position": number;
    readonly "Parent": CEntitySubclassVDataBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerWeaponVData(ptr_or_class: string|AnySDKClass): CBasePlayerWeaponVData;