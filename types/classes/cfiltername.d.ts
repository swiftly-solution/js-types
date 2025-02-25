interface CFilterName {
    "FilterName": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterName(ptr_or_class: string|AnySDKClass): CFilterName;