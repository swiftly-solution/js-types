interface MaterialGroup_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialGroup_t(ptr_or_class: string|AnySDKClass): MaterialGroup_t;