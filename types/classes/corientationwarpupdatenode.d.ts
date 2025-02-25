interface COrientationWarpUpdateNode {
    readonly "FacingPositionParameter": CAnimParamHandle;
    readonly "TurnDamping": CAnimInputDamping;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COrientationWarpUpdateNode(ptr_or_class: string|AnySDKClass): COrientationWarpUpdateNode;