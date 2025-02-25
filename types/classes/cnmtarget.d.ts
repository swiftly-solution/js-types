interface CNmTarget {
    "IsBoneTarget": boolean;
    "IsUsingBoneSpaceOffsets": boolean;
    "HasOffsets": boolean;
    "IsSet": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTarget(ptr_or_class: string|AnySDKClass): CNmTarget;