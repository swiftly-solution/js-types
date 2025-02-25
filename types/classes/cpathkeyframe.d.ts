interface CPathKeyFrame {
    "Origin": Vector;
    "Angles": QAngle;
    "NextKey": string;
    "NextTime": number;
    readonly "NextKey1": CPathKeyFrame;
    readonly "PrevKey": CPathKeyFrame;
    "MoveSpeed": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathKeyFrame(ptr_or_class: string|AnySDKClass): CPathKeyFrame;