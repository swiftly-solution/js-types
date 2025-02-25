interface CMotionGraphUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionGraphUpdateNode(ptr_or_class: string|AnySDKClass): CMotionGraphUpdateNode;