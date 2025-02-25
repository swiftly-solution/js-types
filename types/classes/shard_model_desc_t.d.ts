interface shard_model_desc_t {
    "ModelID": number;
    "Solid": number;
    "PanelSize": Vector2D;
    "StressPositionA": Vector2D;
    "StressPositionB": Vector2D;
    readonly "PanelVertices": Object;
    readonly "InitialPanelVertices": Object;
    "GlassHalfThickness": number;
    "HasParent": boolean;
    "ParentFrozen": boolean;
    "SurfacePropStringToken": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function shard_model_desc_t(ptr_or_class: string|AnySDKClass): shard_model_desc_t;