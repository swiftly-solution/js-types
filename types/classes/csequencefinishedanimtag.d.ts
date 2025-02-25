interface CSequenceFinishedAnimTag {
    "SequenceName": string;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceFinishedAnimTag(ptr_or_class: string|AnySDKClass): CSequenceFinishedAnimTag;