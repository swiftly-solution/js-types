interface CAnimAttachment {
    "InfluenceOffsets": Object;
    "InfluenceIndices": Object;
    "InfluenceWeights": Object;
    "NumInfluences": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimAttachment(ptr_or_class: string|AnySDKClass): CAnimAttachment;