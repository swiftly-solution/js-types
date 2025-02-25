interface CBlend2DUpdateNode {
    readonly "Items": Object;
    readonly "Tags": Object;
    readonly "ParamSpans": CParamSpanUpdater;
    readonly "NodeItemIndices": Object;
    readonly "Damping": CAnimInputDamping;
    "BlendSourceX": number;
    readonly "ParamX": CAnimParamHandle;
    "BlendSourceY": number;
    readonly "ParamY": CAnimParamHandle;
    "BlendMode": number;
    "PlaybackSpeed": number;
    "Loop": boolean;
    "LockBlendOnReset": boolean;
    "LockWhenWaning": boolean;
    "AnimEventsAndTagsOnMostWeightedOnly": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlend2DUpdateNode(ptr_or_class: string|AnySDKClass): CBlend2DUpdateNode;