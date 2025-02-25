interface CRuleBrushEntity {
    readonly "Parent": CRuleEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRuleBrushEntity(ptr_or_class: string|AnySDKClass): CRuleBrushEntity;