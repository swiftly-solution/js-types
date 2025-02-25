interface CUnaryUpdateNode {
    readonly "ChildNode": CAnimUpdateNodeRef;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CUnaryUpdateNode(ptr_or_class: string|AnySDKClass): CUnaryUpdateNode;