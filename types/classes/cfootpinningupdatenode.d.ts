interface CFootPinningUpdateNode {
    readonly "PoseOpFixedData": FootPinningPoseOpFixedData_t;
    "TimingSource": number;
    readonly "Params": Object;
    "ResetChild": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootPinningUpdateNode(ptr_or_class: string|AnySDKClass): CFootPinningUpdateNode;