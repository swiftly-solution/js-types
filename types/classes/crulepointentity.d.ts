interface CRulePointEntity {
    "Score": number;
    readonly "Parent": CRuleEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRulePointEntity(ptr_or_class: string|AnySDKClass): CRulePointEntity;