interface FilterTeam {
    "FilterTeam": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FilterTeam(ptr_or_class: string|AnySDKClass): FilterTeam;