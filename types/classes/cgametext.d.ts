interface CGameText {
    "Message": string;
    readonly "TextParms": hudtextparms_t;
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameText(ptr_or_class: string|AnySDKClass): CGameText;