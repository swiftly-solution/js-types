interface WorldNode_t {
    readonly "SceneObjects": Object;
    readonly "InfoOverlays": Object;
    readonly "VisClusterMembership": Object;
    readonly "AggregateSceneObjects": Object;
    readonly "ClutterSceneObjects": Object;
    readonly "ExtraVertexStreamOverrides": Object;
    readonly "MaterialOverrides": Object;
    readonly "ExtraVertexStreams": Object;
    readonly "LayerNames": Object;
    readonly "SceneObjectLayerIndices": Object;
    readonly "OverlayLayerIndices": Object;
    "GrassFileName": string;
    readonly "NodeLightingInfo": BakedLightingInfo_t;
    "HasBakedGeometryFlag": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WorldNode_t(ptr_or_class: string|AnySDKClass): WorldNode_t;