interface ExtraVertexStreamOverride_t {
    "SubSceneObject": number;
    "DrawCallIndex": number;
    "AdditionalMeshDrawPrimitiveFlags": number;
    readonly "ExtraBufferBinding": CRenderBufferBinding;
    readonly "Parent": BaseSceneObjectOverride_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ExtraVertexStreamOverride_t(ptr_or_class: string|AnySDKClass): ExtraVertexStreamOverride_t;