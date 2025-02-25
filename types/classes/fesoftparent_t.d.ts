interface FeSoftParent_t {
    "Parent": number;
    "Alpha": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSoftParent_t(ptr_or_class: string|AnySDKClass): FeSoftParent_t;