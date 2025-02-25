interface CFilterProximity {
    "Radius": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterProximity(ptr_or_class: string|AnySDKClass): CFilterProximity;