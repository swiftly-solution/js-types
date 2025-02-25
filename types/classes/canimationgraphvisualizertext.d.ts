interface CAnimationGraphVisualizerText {
    "WsPosition": Vector;
    "Color": Color;
    "Text": string;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerText(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerText;