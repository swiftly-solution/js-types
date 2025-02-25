interface CModelConfig {
    "ConfigName": string;
    readonly "Elements": Object;
    "TopLevel": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfig(ptr_or_class: string|AnySDKClass): CModelConfig;