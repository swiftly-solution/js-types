interface CRenderMesh {
    readonly "Skeleton": CRenderSkeleton;
    readonly "MeshDeformParams": DynamicMeshDeformParams_t;
    readonly "GroomData": CRenderGroom;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderMesh(ptr_or_class: string|AnySDKClass): CRenderMesh;