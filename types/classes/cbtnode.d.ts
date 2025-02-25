interface CBtNode {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNode(ptr_or_class: string|AnySDKClass): CBtNode;