interface CModelConfigList {
    "HideMaterialGroupInTools": boolean;
    "HideRenderColorInTools": boolean;
    readonly "Configs": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigList(ptr_or_class: string|AnySDKClass): CModelConfigList;