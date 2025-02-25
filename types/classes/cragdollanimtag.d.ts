interface CRagdollAnimTag {
    "PoseControl": number;
    "Frequency": number;
    "DampingRatio": number;
    "DecayDuration": number;
    "DecayBias": number;
    "Destroy": boolean;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollAnimTag(ptr_or_class: string|AnySDKClass): CRagdollAnimTag;