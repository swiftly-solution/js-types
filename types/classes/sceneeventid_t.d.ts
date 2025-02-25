interface SceneEventId_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SceneEventId_t(ptr_or_class: string|AnySDKClass): SceneEventId_t;