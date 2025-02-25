interface CAnimationGraphVisualizerPie {
    "WsCenter": Vector;
    "WsStart": Vector;
    "WsEnd": Vector;
    "Color": Color;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerPie(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerPie;