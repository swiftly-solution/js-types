interface RenderProjectedMaterial_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RenderProjectedMaterial_t(ptr_or_class: string|AnySDKClass): RenderProjectedMaterial_t;