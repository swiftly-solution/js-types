interface CDampedPathAnimMotorUpdater {
    "AnticipationTime": number;
    "MinSpeedScale": number;
    readonly "AnticipationPosParam": CAnimParamHandle;
    readonly "AnticipationHeadingParam": CAnimParamHandle;
    "SpringConstant": number;
    "MinSpringTension": number;
    "MaxSpringTension": number;
    readonly "Parent": CPathAnimMotorUpdaterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDampedPathAnimMotorUpdater(ptr_or_class: string|AnySDKClass): CDampedPathAnimMotorUpdater;