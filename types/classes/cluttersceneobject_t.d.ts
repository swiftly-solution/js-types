interface ClutterSceneObject_t {
    readonly "Bounds": AABB_t;
    "Flags": number;
    "Layer": number;
    readonly "InstancePositions": Object;
    readonly "InstanceScales": Object;
    readonly "InstanceTintSrgb": Object;
    readonly "Tiles": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ClutterSceneObject_t(ptr_or_class: string|AnySDKClass): ClutterSceneObject_t;