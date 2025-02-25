interface CStopwatch {
    "Interval": number;
    readonly "Parent": CStopwatchBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStopwatch(ptr_or_class: string|AnySDKClass): CStopwatch;