interface EventClientOutput_t {
    readonly "LoopState": EngineLoopState_t;
    "RenderTime": number;
    "RealTime": number;
    "RenderFrameTimeUnbounded": number;
    "RenderOnly": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientOutput_t(ptr_or_class: string|AnySDKClass): EventClientOutput_t;