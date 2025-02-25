interface CModelConfigElement_SetMaterialGroupOnAttachedModels {
    "MaterialGroupName": string;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetMaterialGroupOnAttachedModels(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetMaterialGroupOnAttachedModels;