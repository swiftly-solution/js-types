interface CBoneMaskUpdateNode {
    "WeightListIndex": number;
    "RootMotionBlend": number;
    "BlendSpace": number;
    "FootMotionTiming": number;
    "UseBlendScale": boolean;
    "BlendValueSource": number;
    readonly "BlendParameter": CAnimParamHandle;
    readonly "Parent": CBinaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneMaskUpdateNode(ptr_or_class: string|AnySDKClass): CBoneMaskUpdateNode;