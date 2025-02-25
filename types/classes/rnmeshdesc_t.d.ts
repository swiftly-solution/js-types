interface RnMeshDesc_t {
    readonly "Mesh": RnMesh_t;
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnMeshDesc_t(ptr_or_class: string|AnySDKClass): RnMeshDesc_t;