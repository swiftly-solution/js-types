interface CRenderBufferBinding {
    "Buffer": number;
    "BindOffsetBytes": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderBufferBinding(ptr_or_class: string|AnySDKClass): CRenderBufferBinding;