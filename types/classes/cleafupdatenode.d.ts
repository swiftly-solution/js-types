interface CLeafUpdateNode {
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLeafUpdateNode(ptr_or_class: string|AnySDKClass): CLeafUpdateNode;