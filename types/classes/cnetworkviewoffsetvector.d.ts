interface CNetworkViewOffsetVector {
    "X": number;
    "Y": number;
    "Z": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkViewOffsetVector(ptr_or_class: string|AnySDKClass): CNetworkViewOffsetVector;