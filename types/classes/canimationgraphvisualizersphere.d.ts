interface CAnimationGraphVisualizerSphere {
    "WsPosition": Vector;
    "Radius": number;
    "Color": Color;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerSphere(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerSphere;