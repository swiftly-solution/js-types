interface CTargetSelectorUpdateNode {
    readonly "Children": Object;
    readonly "PositionParameter": CAnimParamHandle;
    readonly "FacePositionParameter": CAnimParamHandle;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTargetSelectorUpdateNode(ptr_or_class: string|AnySDKClass): CTargetSelectorUpdateNode;