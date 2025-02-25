interface CEconItemAttribute {
    "AttributeDefinitionIndex": number;
    "Value": number;
    "InitialValue": number;
    "RefundableCurrency": number;
    "SetBonus": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEconItemAttribute(ptr_or_class: string|AnySDKClass): CEconItemAttribute;