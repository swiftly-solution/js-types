interface FootPinningPoseOpFixedData_t {
    readonly "FootInfo": Object;
    "BlendTime": number;
    "LockBreakDistance": number;
    "MaxLegTwist": number;
    "HipBoneIndex": number;
    "ApplyLegTwistLimits": boolean;
    "ApplyFootRotationLimits": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FootPinningPoseOpFixedData_t(ptr_or_class: string|AnySDKClass): FootPinningPoseOpFixedData_t;