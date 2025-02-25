interface CBtNodeDecorator {
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeDecorator(ptr_or_class: string|AnySDKClass): CBtNodeDecorator;