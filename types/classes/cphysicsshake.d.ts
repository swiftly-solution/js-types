interface CPhysicsShake {
    "Force": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsShake(ptr_or_class: string|AnySDKClass): CPhysicsShake;