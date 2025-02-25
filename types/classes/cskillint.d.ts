interface CSkillInt {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkillInt(ptr_or_class: string|AnySDKClass): CSkillInt;