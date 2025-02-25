interface CSelectorUpdateNode {
    readonly "Children": Object;
    readonly "Tags": Object;
    readonly "BlendCurve": CBlendCurve;
    readonly "Parameter": CAnimParamHandle;
    "TagIndex": number;
    "TagBehavior": number;
    "ResetOnChange": boolean;
    "LockWhenWaning": boolean;
    "SyncCyclesOnChange": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSelectorUpdateNode(ptr_or_class: string|AnySDKClass): CSelectorUpdateNode;