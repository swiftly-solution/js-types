interface CZeroPoseUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CZeroPoseUpdateNode(ptr_or_class: string|AnySDKClass): CZeroPoseUpdateNode;