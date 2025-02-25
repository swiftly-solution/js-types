interface CPairedSequenceComponentUpdater {
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPairedSequenceComponentUpdater(ptr_or_class: string|AnySDKClass): CPairedSequenceComponentUpdater;