interface CFilterLOS {
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterLOS(ptr_or_class: string|AnySDKClass): CFilterLOS;