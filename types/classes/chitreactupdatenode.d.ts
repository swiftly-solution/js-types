interface CHitReactUpdateNode {
    readonly "OpFixedSettings": HitReactFixedSettings_t;
    readonly "TriggerParam": CAnimParamHandle;
    readonly "HitBoneParam": CAnimParamHandle;
    readonly "HitOffsetParam": CAnimParamHandle;
    readonly "HitDirectionParam": CAnimParamHandle;
    readonly "HitStrengthParam": CAnimParamHandle;
    "MinDelayBetweenHits": number;
    "ResetChild": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitReactUpdateNode(ptr_or_class: string|AnySDKClass): CHitReactUpdateNode;