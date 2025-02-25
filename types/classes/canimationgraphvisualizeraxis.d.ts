interface CAnimationGraphVisualizerAxis {
    "AxisSize": number;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerAxis(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerAxis;