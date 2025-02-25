interface CSimpleStopwatch {
    readonly "Parent": CStopwatchBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimpleStopwatch(ptr_or_class: string|AnySDKClass): CSimpleStopwatch;