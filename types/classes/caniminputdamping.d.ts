interface CAnimInputDamping {
    "SpeedFunction": number;
    "SpeedScale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimInputDamping(ptr_or_class: string|AnySDKClass): CAnimInputDamping;