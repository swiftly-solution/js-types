interface CAnimationGraphVisualizerLine {
    "WsPositionStart": Vector;
    "WsPositionEnd": Vector;
    "Color": Color;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerLine(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerLine;