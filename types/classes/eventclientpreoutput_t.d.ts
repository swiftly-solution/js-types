interface EventClientPreOutput_t {
    readonly "LoopState": EngineLoopState_t;
    "RenderTime": number;
    "RenderFrameTime": number;
    "RenderFrameTimeUnbounded": number;
    "RealTime": number;
    "RenderOnly": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPreOutput_t(ptr_or_class: string|AnySDKClass): EventClientPreOutput_t;