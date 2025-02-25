interface CSkillFloat {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkillFloat(ptr_or_class: string|AnySDKClass): CSkillFloat;