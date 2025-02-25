interface VMixPannerDesc_t {
    "Type": number;
    "Strength": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixPannerDesc_t(ptr_or_class: string|AnySDKClass): VMixPannerDesc_t;