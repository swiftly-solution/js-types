interface CDirectionalBlendUpdateNode {
    "Sequences": Object;
    readonly "Damping": CAnimInputDamping;
    "BlendValueSource": number;
    readonly "ParamIndex": CAnimParamHandle;
    "PlaybackSpeed": number;
    "Duration": number;
    "Loop": boolean;
    "LockBlendOnReset": boolean;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDirectionalBlendUpdateNode(ptr_or_class: string|AnySDKClass): CDirectionalBlendUpdateNode;