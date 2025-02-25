interface FootFixedData_t {
    "ToeOffset": Vector;
    "HeelOffset": Vector;
    "TargetBoneIndex": number;
    "AnkleBoneIndex": number;
    "IKAnchorBoneIndex": number;
    "IkChainIndex": number;
    "MaxIKLength": number;
    "FootIndex": number;
    "TagIndex": number;
    "MaxRotationLeft": number;
    "MaxRotationRight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FootFixedData_t(ptr_or_class: string|AnySDKClass): FootFixedData_t;