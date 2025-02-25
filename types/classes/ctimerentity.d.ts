interface CTimerEntity {
    readonly "OnTimer": CEntityIOOutput;
    readonly "OnTimerHigh": CEntityIOOutput;
    readonly "OnTimerLow": CEntityIOOutput;
    "Disabled": number;
    "InitialDelay": number;
    "RefireTime": number;
    "UpDownState": boolean;
    "UseRandomTime": number;
    "PauseAfterFiring": boolean;
    "LowerRandomBound": number;
    "UpperRandomBound": number;
    "RemainingTime": number;
    "Paused": boolean;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTimerEntity(ptr_or_class: string|AnySDKClass): CTimerEntity;