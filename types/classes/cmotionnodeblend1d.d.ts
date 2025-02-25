interface CMotionNodeBlend1D {
    readonly "BlendItems": Object;
    "ParamIndex": number;
    readonly "Parent": CMotionNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionNodeBlend1D(ptr_or_class: string|AnySDKClass): CMotionNodeBlend1D;