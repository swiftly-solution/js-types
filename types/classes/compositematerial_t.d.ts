interface CompositeMaterial_t {
    readonly "GeneratedTextures": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterial_t(ptr_or_class: string|AnySDKClass): CompositeMaterial_t;