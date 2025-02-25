interface CMotionGraph {
    readonly "ParamSpans": CParamSpanUpdater;
    readonly "Tags": Object;
    "ParameterCount": number;
    "ConfigStartIndex": number;
    "ConfigCount": number;
    "Loop": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionGraph(ptr_or_class: string|AnySDKClass): CMotionGraph;