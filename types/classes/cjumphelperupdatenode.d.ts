interface CJumpHelperUpdateNode {
    readonly "TargetParam": CAnimParamHandle;
    "OriginalJumpMovement": Vector;
    "OriginalJumpDuration": number;
    "JumpStartCycle": number;
    "JumpEndCycle": number;
    "CorrectionMethod": number;
    "TranslationAxis": Object;
    "ScaleSpeed": boolean;
    readonly "Parent": CSequenceUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CJumpHelperUpdateNode(ptr_or_class: string|AnySDKClass): CJumpHelperUpdateNode;