interface EventSetTime_t {
    readonly "LoopState": EngineLoopState_t;
    "ClientOutputFrames": number;
    "RealTime": number;
    "RenderTime": number;
    "RenderFrameTime": number;
    "RenderFrameTimeUnbounded": number;
    "RenderFrameTimeUnscaled": number;
    "TickRemainder": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventSetTime_t(ptr_or_class: string|AnySDKClass): EventSetTime_t;