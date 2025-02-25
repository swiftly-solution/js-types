interface CSpeedScaleUpdateNode {
    readonly "ParamIndex": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpeedScaleUpdateNode(ptr_or_class: string|AnySDKClass): CSpeedScaleUpdateNode;