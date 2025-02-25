interface CInputStreamUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInputStreamUpdateNode(ptr_or_class: string|AnySDKClass): CInputStreamUpdateNode;