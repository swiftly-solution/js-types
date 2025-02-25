interface VertexPositionColor_t {
    "Position": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VertexPositionColor_t(ptr_or_class: string|AnySDKClass): VertexPositionColor_t;