interface CFilterContext {
    "FilterContext": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterContext(ptr_or_class: string|AnySDKClass): CFilterContext;