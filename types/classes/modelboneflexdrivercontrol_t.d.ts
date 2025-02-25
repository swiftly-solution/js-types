interface ModelBoneFlexDriverControl_t {
    "BoneComponent": number;
    "FlexController": string;
    "FlexControllerToken": number;
    "Min": number;
    "Max": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelBoneFlexDriverControl_t(ptr_or_class: string|AnySDKClass): ModelBoneFlexDriverControl_t;