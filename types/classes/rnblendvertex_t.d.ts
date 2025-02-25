interface RnBlendVertex_t {
    "Weight0": number;
    "Index0": number;
    "Weight1": number;
    "Index1": number;
    "Weight2": number;
    "Index2": number;
    "Flags": number;
    "TargetIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnBlendVertex_t(ptr_or_class: string|AnySDKClass): RnBlendVertex_t;