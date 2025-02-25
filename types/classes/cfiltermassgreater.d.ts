interface CFilterMassGreater {
    "FilterMass": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterMassGreater(ptr_or_class: string|AnySDKClass): CFilterMassGreater;