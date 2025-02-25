interface CFollowTargetUpdateNode {
    readonly "OpFixedData": FollowTargetOpFixedSettings_t;
    readonly "ParameterPosition": CAnimParamHandle;
    readonly "ParameterOrientation": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFollowTargetUpdateNode(ptr_or_class: string|AnySDKClass): CFollowTargetUpdateNode;