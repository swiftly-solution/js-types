interface VertexPositionNormal_t {
    "Position": Vector;
    "Normal": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VertexPositionNormal_t(ptr_or_class: string|AnySDKClass): VertexPositionNormal_t;