interface CAnimMovement {
    "0": number;
    "1": number;
    "Endframe": number;
    "Motionflags": number;
    "Angle": number;
    "Vector": Vector;
    "Position": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimMovement(ptr_or_class: string|AnySDKClass): CAnimMovement;