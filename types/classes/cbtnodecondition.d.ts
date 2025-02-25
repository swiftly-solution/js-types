interface CBtNodeCondition {
    "Negated": boolean;
    readonly "Parent": CBtNodeDecorator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeCondition(ptr_or_class: string|AnySDKClass): CBtNodeCondition;