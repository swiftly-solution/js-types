interface CSeqSeqDescFlag {
    "Looping": boolean;
    "Snap": boolean;
    "Autoplay": boolean;
    "Post": boolean;
    "Hidden": boolean;
    "Multi": boolean;
    "LegacyDelta": boolean;
    "LegacyWorldspace": boolean;
    "LegacyCyclepose": boolean;
    "LegacyRealtime": boolean;
    "ModelDoc": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqSeqDescFlag(ptr_or_class: string|AnySDKClass): CSeqSeqDescFlag;