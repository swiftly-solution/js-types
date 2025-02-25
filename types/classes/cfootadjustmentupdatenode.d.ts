interface CFootAdjustmentUpdateNode {
    readonly "Clips": Object;
    readonly "BasePoseCacheHandle": CPoseHandle;
    readonly "FacingTarget": CAnimParamHandle;
    "TurnTimeMin": number;
    "TurnTimeMax": number;
    "StepHeightMax": number;
    "StepHeightMaxAngle": number;
    "ResetChild": boolean;
    "AnimationDriven": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootAdjustmentUpdateNode(ptr_or_class: string|AnySDKClass): CFootAdjustmentUpdateNode;