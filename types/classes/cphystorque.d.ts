interface CPhysTorque {
    "Axis": Vector;
    readonly "Parent": CPhysForce;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysTorque(ptr_or_class: string|AnySDKClass): CPhysTorque;