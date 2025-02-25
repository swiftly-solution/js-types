interface CLookAtUpdateNode {
    readonly "OpFixedSettings": LookAtOpFixedSettings_t;
    "Target": number;
    readonly "ParamIndex": CAnimParamHandle;
    readonly "WeightParamIndex": CAnimParamHandle;
    "ResetChild": boolean;
    "LockWhenWaning": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLookAtUpdateNode(ptr_or_class: string|AnySDKClass): CLookAtUpdateNode;