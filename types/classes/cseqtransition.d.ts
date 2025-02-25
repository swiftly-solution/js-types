interface CSeqTransition {
    "FadeInTime": number;
    "FadeOutTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqTransition(ptr_or_class: string|AnySDKClass): CSeqTransition;