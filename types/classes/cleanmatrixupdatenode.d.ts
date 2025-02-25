interface CLeanMatrixUpdateNode {
    readonly "Poses": Object;
    readonly "Damping": CAnimInputDamping;
    "BlendSource": number;
    readonly "ParamIndex": CAnimParamHandle;
    "VerticalAxis": Vector;
    "HorizontalAxis": Vector;
    "Sequence": number;
    "MaxValue": number;
    "SequenceMaxFrame": number;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLeanMatrixUpdateNode(ptr_or_class: string|AnySDKClass): CLeanMatrixUpdateNode;