interface CModelConfigElement_SetMaterialGroup {
    "MaterialGroupName": string;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetMaterialGroup(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetMaterialGroup;