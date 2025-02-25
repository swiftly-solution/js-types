interface FeWeightedNode_t {
    "Node": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeWeightedNode_t(ptr_or_class: string|AnySDKClass): FeWeightedNode_t;