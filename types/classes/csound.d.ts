interface CSound {
    readonly "Owner": CBaseEntity;
    readonly "Target": CBaseEntity;
    "Volume": number;
    "OcclusionScale": number;
    "NextAudible": number;
    "ExpireTime": number;
    "Next": number;
    "NoExpirationTime": boolean;
    "OwnerChannelIndex": number;
    "Origin": Vector;
    "HasOwner": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSound(ptr_or_class: string|AnySDKClass): CSound;