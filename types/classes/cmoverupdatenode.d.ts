interface CMoverUpdateNode {
    readonly "Damping": CAnimInputDamping;
    "FacingTarget": number;
    readonly "MoveVecParam": CAnimParamHandle;
    readonly "MoveHeadingParam": CAnimParamHandle;
    readonly "TurnToFaceParam": CAnimParamHandle;
    "TurnToFaceOffset": number;
    "TurnToFaceLimit": number;
    "Additive": boolean;
    "ApplyMovement": boolean;
    "OrientMovement": boolean;
    "ApplyRotation": boolean;
    "LimitOnly": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMoverUpdateNode(ptr_or_class: string|AnySDKClass): CMoverUpdateNode;