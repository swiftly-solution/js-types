interface CAnimationGraphVisualizerPrimitiveBase {
    "Type": number;
    readonly "OwningAnimNodePaths": Object;
    "OwningAnimNodePathCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerPrimitiveBase(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerPrimitiveBase;