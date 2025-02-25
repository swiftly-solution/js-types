interface CSeqMultiFetch {
    readonly "Flags": CSeqMultiFetchFlag;
    readonly "LocalReferenceArray": Object;
    "GroupSize": Object;
    "LocalPose": Object;
    readonly "PoseKeyArray0": Object;
    readonly "PoseKeyArray1": Object;
    "LocalCyclePoseParameter": number;
    "CalculatePoseParameters": boolean;
    "FixedBlendWeight": boolean;
    "FixedBlendWeightVals": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqMultiFetch(ptr_or_class: string|AnySDKClass): CSeqMultiFetch;