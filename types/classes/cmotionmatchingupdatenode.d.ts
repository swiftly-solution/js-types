interface CMotionMatchingUpdateNode {
    readonly "DataSet": CMotionDataSet;
    readonly "Weights": Object;
    "SearchEveryTick": boolean;
    "SearchInterval": number;
    "SearchWhenClipEnds": boolean;
    "SearchWhenGoalChanges": boolean;
    readonly "BlendCurve": CBlendCurve;
    "SampleRate": number;
    "BlendTime": number;
    "LockClipWhenWaning": boolean;
    "SelectionThreshold": number;
    "ReselectionTimeWindow": number;
    "EnableRotationCorrection": boolean;
    "GoalAssist": boolean;
    "GoalAssistDistance": number;
    "GoalAssistTolerance": number;
    readonly "DistanceScale_Damping": CAnimInputDamping;
    "DistanceScale_OuterRadius": number;
    "DistanceScale_InnerRadius": number;
    "DistanceScale_MaxScale": number;
    "DistanceScale_MinScale": number;
    "EnableDistanceScaling": boolean;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionMatchingUpdateNode(ptr_or_class: string|AnySDKClass): CMotionMatchingUpdateNode;