interface CAnimLocalHierarchy {
    "StartFrame": number;
    "PeakFrame": number;
    "TailFrame": number;
    "EndFrame": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimLocalHierarchy(ptr_or_class: string|AnySDKClass): CAnimLocalHierarchy;