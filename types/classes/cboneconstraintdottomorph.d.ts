interface CBoneConstraintDotToMorph {
    "BoneName": string;
    "TargetBoneName": string;
    "MorphChannelName": string;
    "Remap": Object;
    readonly "Parent": CBoneConstraintBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintDotToMorph(ptr_or_class: string|AnySDKClass): CBoneConstraintDotToMorph;