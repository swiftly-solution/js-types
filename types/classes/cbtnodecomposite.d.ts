interface CBtNodeComposite {
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeComposite(ptr_or_class: string|AnySDKClass): CBtNodeComposite;