interface LookAtBone_t {
    "Index": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function LookAtBone_t(ptr_or_class: string|AnySDKClass): LookAtBone_t;