interface EventClientPostOutput_t {
    readonly "LoopState": EngineLoopState_t;
    "RenderTime": number;
    "RenderFrameTime": number;
    "RenderFrameTimeUnbounded": number;
    "RenderOnly": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPostOutput_t(ptr_or_class: string|AnySDKClass): EventClientPostOutput_t;