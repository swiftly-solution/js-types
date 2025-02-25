interface CRandStopwatch {
    "MinInterval": number;
    "MaxInterval": number;
    readonly "Parent": CStopwatchBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRandStopwatch(ptr_or_class: string|AnySDKClass): CRandStopwatch;