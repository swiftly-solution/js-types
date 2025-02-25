interface CRootUpdateNode {
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRootUpdateNode(ptr_or_class: string|AnySDKClass): CRootUpdateNode;