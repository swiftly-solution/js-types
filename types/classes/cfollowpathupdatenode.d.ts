interface CFollowPathUpdateNode {
    "BlendOutTime": number;
    "BlockNonPathMovement": boolean;
    "StopFeetAtGoal": boolean;
    "ScaleSpeed": boolean;
    "Scale": number;
    "MinAngle": number;
    "MaxAngle": number;
    "SpeedScaleBlending": number;
    readonly "TurnDamping": CAnimInputDamping;
    "FacingTarget": number;
    readonly "Param": CAnimParamHandle;
    "TurnToFaceOffset": number;
    "TurnToFace": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFollowPathUpdateNode(ptr_or_class: string|AnySDKClass): CFollowPathUpdateNode;