interface SimpleConstraintSoundProfile {
    "KeyPoints": Object;
    "ReversalSoundThresholds": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SimpleConstraintSoundProfile(ptr_or_class: string|AnySDKClass): SimpleConstraintSoundProfile;