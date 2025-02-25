interface CMotionNodeSequence {
    readonly "Tags": Object;
    "Sequence": number;
    "PlaybackSpeed": number;
    readonly "Parent": CMotionNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionNodeSequence(ptr_or_class: string|AnySDKClass): CMotionNodeSequence;