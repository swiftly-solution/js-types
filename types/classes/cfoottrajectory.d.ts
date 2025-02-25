interface CFootTrajectory {
    "Offset": Vector;
    "RotationOffset": number;
    "Progression": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootTrajectory(ptr_or_class: string|AnySDKClass): CFootTrajectory;