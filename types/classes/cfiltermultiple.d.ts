interface CFilterMultiple {
    "FilterType": number;
    "FilterName": Object;
    readonly "Filter": Object;
    "FilterCount": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterMultiple(ptr_or_class: string|AnySDKClass): CFilterMultiple;