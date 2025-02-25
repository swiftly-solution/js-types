interface TwoBoneIKSettings_t {
    "EndEffectorType": number;
    readonly "EndEffectorAttachment": CAnimAttachment;
    "TargetType": number;
    readonly "TargetAttachment": CAnimAttachment;
    "TargetBoneIndex": number;
    readonly "PositionParam": CAnimParamHandle;
    readonly "RotationParam": CAnimParamHandle;
    "AlwaysUseFallbackHinge": boolean;
    "LsFallbackHingeAxis": Vector;
    "FixedBoneIndex": number;
    "MiddleBoneIndex": number;
    "EndBoneIndex": number;
    "MatchTargetOrientation": boolean;
    "ConstrainTwist": boolean;
    "MaxTwist": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TwoBoneIKSettings_t(ptr_or_class: string|AnySDKClass): TwoBoneIKSettings_t;