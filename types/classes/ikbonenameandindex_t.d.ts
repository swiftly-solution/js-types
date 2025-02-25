interface IKBoneNameAndIndex_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKBoneNameAndIndex_t(ptr_or_class: string|AnySDKClass): IKBoneNameAndIndex_t;