interface CTargetWarpUpdateNode {
    readonly "PositionParameter": CAnimParamHandle;
    readonly "FacePositionParameter": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTargetWarpUpdateNode(ptr_or_class: string|AnySDKClass): CTargetWarpUpdateNode;