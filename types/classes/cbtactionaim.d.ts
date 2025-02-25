interface CBtActionAim {
    "SensorInputKey": string;
    "AimReadyKey": string;
    "ZoomCooldownTimestamp": number;
    "DoneAiming": boolean;
    "LerpStartTime": number;
    "NextLookTargetLerpTime": number;
    "PenaltyReductionRatio": number;
    "NextLookTarget": QAngle;
    readonly "AimTimer": CountdownTimer;
    readonly "SniperHoldTimer": CountdownTimer;
    readonly "FocusIntervalTimer": CountdownTimer;
    "Acquired": boolean;
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtActionAim(ptr_or_class: string|AnySDKClass): CBtActionAim;