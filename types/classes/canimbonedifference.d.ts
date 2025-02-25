interface CAnimBoneDifference {
    "PosError": Vector;
    "HasRotation": boolean;
    "HasMovement": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimBoneDifference(ptr_or_class: string|AnySDKClass): CAnimBoneDifference;