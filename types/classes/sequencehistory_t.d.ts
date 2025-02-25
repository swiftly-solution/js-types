interface SequenceHistory_t {
    "Sequence": number;
    "SeqStartTime": number;
    "SeqFixedCycle": number;
    "SeqLoopMode": number;
    "PlaybackRate": number;
    "CyclesPerSecond": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SequenceHistory_t(ptr_or_class: string|AnySDKClass): SequenceHistory_t;