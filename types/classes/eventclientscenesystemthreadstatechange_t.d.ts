interface EventClientSceneSystemThreadStateChange_t {
    "ThreadsActive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientSceneSystemThreadStateChange_t(ptr_or_class: string|AnySDKClass): EventClientSceneSystemThreadStateChange_t;