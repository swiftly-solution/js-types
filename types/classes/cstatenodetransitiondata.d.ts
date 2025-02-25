interface CStateNodeTransitionData {
    readonly "Curve": CBlendCurve;
    "Reset": any;
    "ResetCycleOption": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateNodeTransitionData(ptr_or_class: string|AnySDKClass): CStateNodeTransitionData;