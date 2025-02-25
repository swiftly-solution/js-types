interface CChoreoUpdateNode {
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CChoreoUpdateNode(ptr_or_class: string|AnySDKClass): CChoreoUpdateNode;