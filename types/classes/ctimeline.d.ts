interface CTimeline {
    "Values": Object;
    "ValueCounts": Object;
    "BucketCount": number;
    "Interval": number;
    "FinalValue": number;
    "CompressionType": number;
    "Stopped": boolean;
    readonly "Parent": IntervalTimer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTimeline(ptr_or_class: string|AnySDKClass): CTimeline;