interface AggregateSceneObject_t {
    "AllFlags": number;
    "AnyFlags": number;
    "Layer": number;
    readonly "AggregateMeshes": Object;
    readonly "LodSetups": Object;
    readonly "VisClusterMembership": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AggregateSceneObject_t(ptr_or_class: string|AnySDKClass): AggregateSceneObject_t;