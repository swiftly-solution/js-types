interface BaseSceneObjectOverride_t {
    "SceneObjectIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function BaseSceneObjectOverride_t(ptr_or_class: string|AnySDKClass): BaseSceneObjectOverride_t;