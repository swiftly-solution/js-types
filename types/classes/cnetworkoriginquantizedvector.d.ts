interface CNetworkOriginQuantizedVector {
    "X": number;
    "Y": number;
    "Z": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkOriginQuantizedVector(ptr_or_class: string|AnySDKClass): CNetworkOriginQuantizedVector;