interface CSkillDamage {
    readonly "Damage": CSkillFloat;
    "NPCDamageScalarVsNPC": number;
    "PhysicsForceDamage": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkillDamage(ptr_or_class: string|AnySDKClass): CSkillDamage;