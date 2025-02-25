interface CompositeMaterialMatchFilter_t {
    "CompositeMaterialMatchFilterType": number;
    "StrMatchFilter": string;
    "StrMatchValue": string;
    "PassWhenTrue": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialMatchFilter_t(ptr_or_class: string|AnySDKClass): CompositeMaterialMatchFilter_t;