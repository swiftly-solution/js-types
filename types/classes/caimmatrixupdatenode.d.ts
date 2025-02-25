interface CAimMatrixUpdateNode {
    readonly "OpFixedSettings": AimMatrixOpFixedSettings_t;
    "Target": number;
    readonly "ParamIndex": CAnimParamHandle;
    "Sequence": number;
    "ResetChild": boolean;
    "LockWhenWaning": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAimMatrixUpdateNode(ptr_or_class: string|AnySDKClass): CAimMatrixUpdateNode;