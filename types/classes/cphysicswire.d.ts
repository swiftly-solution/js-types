interface CPhysicsWire {
    "Density": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsWire(ptr_or_class: string|AnySDKClass): CPhysicsWire;