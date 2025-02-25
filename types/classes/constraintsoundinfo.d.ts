interface ConstraintSoundInfo {
    readonly "Sampler": VelocitySampler;
    readonly "SoundProfile": SimpleConstraintSoundProfile;
    "ForwardAxis": Vector;
    "TravelSoundFwd": string;
    "TravelSoundBack": string;
    "ReversalSounds": Object;
    "PlayTravelSound": boolean;
    "PlayReversalSound": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ConstraintSoundInfo(ptr_or_class: string|AnySDKClass): ConstraintSoundInfo;