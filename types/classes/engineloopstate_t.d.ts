interface EngineLoopState_t {
    "PlatWindowWidth": number;
    "PlatWindowHeight": number;
    "RenderWidth": number;
    "RenderHeight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EngineLoopState_t(ptr_or_class: string|AnySDKClass): EngineLoopState_t;