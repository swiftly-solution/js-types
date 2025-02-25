interface MaterialResourceData_t {
    "MaterialName": string;
    "ShaderName": string;
    readonly "IntParams": Object;
    readonly "FloatParams": Object;
    readonly "VectorParams": Object;
    readonly "TextureParams": Object;
    readonly "DynamicParams": Object;
    readonly "DynamicTextureParams": Object;
    readonly "IntAttributes": Object;
    readonly "FloatAttributes": Object;
    readonly "VectorAttributes": Object;
    readonly "TextureAttributes": Object;
    readonly "StringAttributes": Object;
    readonly "RenderAttributesUsed": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialResourceData_t(ptr_or_class: string|AnySDKClass): MaterialResourceData_t;