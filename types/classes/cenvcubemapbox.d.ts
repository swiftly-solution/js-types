interface CEnvCubemapBox {
    readonly "Parent": CEnvCubemap;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvCubemapBox(ptr_or_class: string|AnySDKClass): CEnvCubemapBox;