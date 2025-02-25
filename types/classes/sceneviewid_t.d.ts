interface SceneViewId_t {
    "ViewId": number;
    "FrameCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SceneViewId_t(ptr_or_class: string|AnySDKClass): SceneViewId_t;