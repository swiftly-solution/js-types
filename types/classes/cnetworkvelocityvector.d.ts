interface CNetworkVelocityVector {
    "X": number;
    "Y": number;
    "Z": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkVelocityVector(ptr_or_class: string|AnySDKClass): CNetworkVelocityVector;