interface CSolveIKChainUpdateNode {
    readonly "TargetHandles": Object;
    readonly "OpFixedData": SolveIKChainPoseOpFixedSettings_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSolveIKChainUpdateNode(ptr_or_class: string|AnySDKClass): CSolveIKChainUpdateNode;