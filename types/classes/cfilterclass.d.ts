interface CFilterClass {
    "FilterClass": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterClass(ptr_or_class: string|AnySDKClass): CFilterClass;