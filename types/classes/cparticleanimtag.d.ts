interface CParticleAnimTag {
    "ParticleSystemName": string;
    "ConfigName": string;
    "DetachFromOwner": boolean;
    "StopWhenTagEnds": boolean;
    "TagEndStopIsInstant": boolean;
    "AttachmentName": string;
    "AttachmentType": number;
    "AttachmentCP1Name": string;
    "AttachmentCP1Type": number;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleAnimTag(ptr_or_class: string|AnySDKClass): CParticleAnimTag;