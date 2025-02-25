interface FootLockPoseOpFixedSettings {
    readonly "FootInfo": Object;
    readonly "HipDampingSettings": CAnimInputDamping;
    "HipBoneIndex": number;
    "IkSolverType": number;
    "ApplyTilt": boolean;
    "ApplyHipDrop": boolean;
    "AlwaysUseFallbackHinge": boolean;
    "ApplyFootRotationLimits": boolean;
    "ApplyLegTwistLimits": boolean;
    "MaxFootHeight": number;
    "ExtensionScale": number;
    "MaxLegTwist": number;
    "EnableLockBreaking": boolean;
    "LockBreakTolerance": number;
    "LockBlendTime": number;
    "EnableStretching": boolean;
    "MaxStretchAmount": number;
    "StretchExtensionScale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FootLockPoseOpFixedSettings(ptr_or_class: string|AnySDKClass): FootLockPoseOpFixedSettings;