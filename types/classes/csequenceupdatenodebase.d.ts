interface CSequenceUpdateNodeBase {
    "PlaybackSpeed": number;
    "Loop": boolean;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceUpdateNodeBase(ptr_or_class: string|AnySDKClass): CSequenceUpdateNodeBase;