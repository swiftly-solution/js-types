interface CBoneConstraintPoseSpaceBone {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintPoseSpaceBone(ptr_or_class: string|AnySDKClass): CBoneConstraintPoseSpaceBone;