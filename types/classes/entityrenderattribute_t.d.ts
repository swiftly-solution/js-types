interface EntityRenderAttribute_t {
    "ID": number;
    "Values": Vector4D;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntityRenderAttribute_t(ptr_or_class: string|AnySDKClass): EntityRenderAttribute_t;