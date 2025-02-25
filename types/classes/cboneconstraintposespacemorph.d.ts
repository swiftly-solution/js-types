interface CBoneConstraintPoseSpaceMorph {
    "BoneName": string;
    "AttachmentName": string;
    readonly "OutputMorph": Object;
    "Clamp": boolean;
    readonly "Parent": CBoneConstraintBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintPoseSpaceMorph(ptr_or_class: string|AnySDKClass): CBoneConstraintPoseSpaceMorph;