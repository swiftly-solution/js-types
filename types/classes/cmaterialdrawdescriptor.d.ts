interface CMaterialDrawDescriptor {
    "UvDensity": number;
    "TintColor": Vector;
    "Alpha": number;
    "NumMeshlets": number;
    "FirstMeshlet": number;
    "PrimitiveType": number;
    "BaseVertex": number;
    "VertexCount": number;
    "StartIndex": number;
    "IndexCount": number;
    readonly "IndexBuffer": CRenderBufferBinding;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMaterialDrawDescriptor(ptr_or_class: string|AnySDKClass): CMaterialDrawDescriptor;