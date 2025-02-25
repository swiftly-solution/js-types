interface SequenceWeightedList_t {
    "Sequence": number;
    "RelativeWeight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SequenceWeightedList_t(ptr_or_class: string|AnySDKClass): SequenceWeightedList_t;