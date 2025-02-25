interface FeFollowNode_t {
    "ParentNode": number;
    "ChildNode": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFollowNode_t(ptr_or_class: string|AnySDKClass): FeFollowNode_t;