interface CBaseMoveBehavior {
    "PositionInterpolator": number;
    "RotationInterpolator": number;
    "AnimStartTime": number;
    "AnimEndTime": number;
    "AverageSpeedAcrossFrame": number;
    readonly "CurrentKeyFrame": CPathKeyFrame;
    readonly "TargetKeyFrame": CPathKeyFrame;
    readonly "PreKeyFrame": CPathKeyFrame;
    readonly "PostKeyFrame": CPathKeyFrame;
    "TimeIntoFrame": number;
    "Direction": number;
    readonly "Parent": CPathKeyFrame;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseMoveBehavior(ptr_or_class: string|AnySDKClass): CBaseMoveBehavior;