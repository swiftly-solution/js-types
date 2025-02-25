interface CMeshletDescriptor {
    readonly "CullingData": CDrawCullingData;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMeshletDescriptor(ptr_or_class: string|AnySDKClass): CMeshletDescriptor;