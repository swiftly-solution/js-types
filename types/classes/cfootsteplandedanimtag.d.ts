interface CFootstepLandedAnimTag {
    "FootstepType": number;
    "OverrideSoundName": string;
    "DebugAnimSourceString": string;
    "BoneName": string;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootstepLandedAnimTag(ptr_or_class: string|AnySDKClass): CFootstepLandedAnimTag;