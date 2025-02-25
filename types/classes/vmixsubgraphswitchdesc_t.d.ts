interface VMixSubgraphSwitchDesc_t {
    "InterpolationMode": number;
    "OnlyTailsOnFadeOut": boolean;
    "InterpolationTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixSubgraphSwitchDesc_t(ptr_or_class: string|AnySDKClass): VMixSubgraphSwitchDesc_t;