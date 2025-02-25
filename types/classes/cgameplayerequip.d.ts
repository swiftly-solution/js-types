interface CGamePlayerEquip {
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGamePlayerEquip(ptr_or_class: string|AnySDKClass): CGamePlayerEquip;