interface FeFitInfluence_t {
    "VertexNode": number;
    "Weight": number;
    "MatrixNode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFitInfluence_t(ptr_or_class: string|AnySDKClass): FeFitInfluence_t;