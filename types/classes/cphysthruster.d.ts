interface CPhysThruster {
    "LocalOrigin": Vector;
    readonly "Parent": CPhysForce;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysThruster(ptr_or_class: string|AnySDKClass): CPhysThruster;