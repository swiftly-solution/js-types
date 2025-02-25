interface CAttachment {
    "Name": string;
    "InfluenceNames": Object;
    "InfluenceOffsets": Object;
    "InfluenceWeights": Object;
    "InfluenceRootTransform": Object;
    "Influences": number;
    "IgnoreRotation": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAttachment(ptr_or_class: string|AnySDKClass): CAttachment;