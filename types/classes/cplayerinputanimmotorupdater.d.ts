interface CPlayerInputAnimMotorUpdater {
    readonly "SampleTimes": Object;
    "SpringConstant": number;
    "AnticipationDistance": number;
    readonly "AnticipationPosParam": CAnimParamHandle;
    readonly "AnticipationHeadingParam": CAnimParamHandle;
    "UseAcceleration": boolean;
    readonly "Parent": CAnimMotorUpdaterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerInputAnimMotorUpdater(ptr_or_class: string|AnySDKClass): CPlayerInputAnimMotorUpdater;