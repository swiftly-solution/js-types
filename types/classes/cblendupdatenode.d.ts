interface CBlendUpdateNode {
    readonly "Children": Object;
    readonly "SortedOrder": Object;
    readonly "TargetValues": Object;
    "BlendValueSource": number;
    readonly "ParamIndex": CAnimParamHandle;
    readonly "Damping": CAnimInputDamping;
    "BlendKeyType": number;
    "LockBlendOnReset": boolean;
    "SyncCycles": boolean;
    "Loop": boolean;
    "LockWhenWaning": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlendUpdateNode(ptr_or_class: string|AnySDKClass): CBlendUpdateNode;