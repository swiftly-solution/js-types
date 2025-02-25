interface CRuleEntity {
    "Master": string;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRuleEntity(ptr_or_class: string|AnySDKClass): CRuleEntity;