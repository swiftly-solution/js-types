interface CBasePlayerVData {
    readonly "HeadDamageMultiplier": CSkillFloat;
    readonly "ChestDamageMultiplier": CSkillFloat;
    readonly "StomachDamageMultiplier": CSkillFloat;
    readonly "ArmDamageMultiplier": CSkillFloat;
    readonly "LegDamageMultiplier": CSkillFloat;
    "HoldBreathTime": number;
    "DrowningDamageInterval": number;
    "DrowningDamageInitial": number;
    "DrowningDamageMax": number;
    "WaterSpeed": number;
    "UseRange": number;
    "UseAngleTolerance": number;
    "CrouchTime": number;
    readonly "Parent": CEntitySubclassVDataBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerVData(ptr_or_class: string|AnySDKClass): CBasePlayerVData;