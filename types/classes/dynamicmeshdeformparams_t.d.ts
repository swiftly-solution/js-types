interface DynamicMeshDeformParams_t {
    "TensionCompressScale": number;
    "TensionStretchScale": number;
    "RecomputeSmoothNormalsAfterAnimation": boolean;
    "ComputeDynamicMeshTensionAfterAnimation": boolean;
    "SmoothNormalsAcrossUvSeams": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function DynamicMeshDeformParams_t(ptr_or_class: string|AnySDKClass): DynamicMeshDeformParams_t;