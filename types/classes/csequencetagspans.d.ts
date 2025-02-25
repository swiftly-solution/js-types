interface CSequenceTagSpans {
    readonly "Tags": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceTagSpans(ptr_or_class: string|AnySDKClass): CSequenceTagSpans;