interface CPhysPulley {
    "Position2": Vector;
    "Offset": Object;
    "AddLength": number;
    "GearRatio": number;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysPulley(ptr_or_class: string|AnySDKClass): CPhysPulley;