interface ModelBoneFlexDriver_t {
    "BoneName": string;
    "BoneNameToken": number;
    readonly "Controls": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelBoneFlexDriver_t(ptr_or_class: string|AnySDKClass): ModelBoneFlexDriver_t;