interface ManifestTestResource_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ManifestTestResource_t(ptr_or_class: string|AnySDKClass): ManifestTestResource_t;