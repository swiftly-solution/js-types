interface CBaseFilter {
    "Negated": boolean;
    readonly "OnPass": CEntityIOOutput;
    readonly "OnFail": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseFilter(ptr_or_class: string|AnySDKClass): CBaseFilter;