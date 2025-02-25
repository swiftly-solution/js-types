interface CFlexRule {
    "Flex": number;
    readonly "FlexOps": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexRule(ptr_or_class: string|AnySDKClass): CFlexRule;