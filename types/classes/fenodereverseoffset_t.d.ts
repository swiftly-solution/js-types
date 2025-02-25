interface FeNodeReverseOffset_t {
    "Offset": Vector;
    "BoneCtrl": number;
    "TargetNode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeNodeReverseOffset_t(ptr_or_class: string|AnySDKClass): FeNodeReverseOffset_t;