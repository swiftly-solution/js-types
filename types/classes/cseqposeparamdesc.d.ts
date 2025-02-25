interface CSeqPoseParamDesc {
    "Start": number;
    "End": number;
    "Loop": number;
    "Looping": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqPoseParamDesc(ptr_or_class: string|AnySDKClass): CSeqPoseParamDesc;