interface CCSWeaponBaseGun {
    "ZoomLevel": number;
    "BurstShotsRemaining": number;
    "SilencedModelIndex": number;
    "InPrecache": boolean;
    "NeedsBoltAction": boolean;
    "SkillReloadAvailable": boolean;
    "SkillReloadLiftedReloadKey": boolean;
    "SkillBoltInterruptAvailable": boolean;
    "SkillBoltLiftedFireKey": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSWeaponBaseGun(ptr_or_class: string|AnySDKClass): CCSWeaponBaseGun;