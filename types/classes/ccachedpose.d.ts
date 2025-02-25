interface CCachedPose {
    readonly "MorphWeights": Object;
    "Sequence": number;
    "Cycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCachedPose(ptr_or_class: string|AnySDKClass): CCachedPose;