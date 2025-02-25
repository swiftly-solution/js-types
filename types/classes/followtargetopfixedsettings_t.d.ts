interface FollowTargetOpFixedSettings_t {
    "BoneIndex": number;
    "BoneTarget": boolean;
    "BoneTargetIndex": number;
    "WorldCoodinateTarget": boolean;
    "MatchTargetOrientation": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FollowTargetOpFixedSettings_t(ptr_or_class: string|AnySDKClass): FollowTargetOpFixedSettings_t;