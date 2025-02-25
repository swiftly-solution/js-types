interface CBindPoseUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBindPoseUpdateNode(ptr_or_class: string|AnySDKClass): CBindPoseUpdateNode;