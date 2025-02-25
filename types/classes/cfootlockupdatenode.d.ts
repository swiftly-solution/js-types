interface CFootLockUpdateNode {
    readonly "OpFixedSettings": FootLockPoseOpFixedSettings;
    readonly "FootSettings": Object;
    readonly "HipShiftDamping": CAnimInputDamping;
    readonly "RootHeightDamping": CAnimInputDamping;
    "StrideCurveScale": number;
    "StrideCurveLimitScale": number;
    "StepHeightIncreaseScale": number;
    "StepHeightDecreaseScale": number;
    "HipShiftScale": number;
    "BlendTime": number;
    "MaxRootHeightOffset": number;
    "MinRootHeightOffset": number;
    "TiltPlanePitchSpringStrength": number;
    "TiltPlaneRollSpringStrength": number;
    "ApplyFootRotationLimits": boolean;
    "ApplyHipShift": boolean;
    "ModulateStepHeight": boolean;
    "ResetChild": boolean;
    "EnableVerticalCurvedPaths": boolean;
    "EnableRootHeightDamping": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootLockUpdateNode(ptr_or_class: string|AnySDKClass): CFootLockUpdateNode;