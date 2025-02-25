interface CStopwatchBase {
    "IsRunning": boolean;
    readonly "Parent": CSimpleSimTimer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStopwatchBase(ptr_or_class: string|AnySDKClass): CStopwatchBase;