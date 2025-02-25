interface CCollisionProperty {
    readonly "CollisionAttribute": VPhysicsCollisionAttribute_t;
    "Mins": Vector;
    "Maxs": Vector;
    "SolidFlags": number;
    "SolidType": number;
    "TriggerBloat": number;
    "SurroundType": number;
    "CollisionGroup": number;
    "EnablePhysics": number;
    "BoundingRadius": number;
    "SpecifiedSurroundingMins": Vector;
    "SpecifiedSurroundingMaxs": Vector;
    "SurroundingMaxs": Vector;
    "SurroundingMins": Vector;
    "CapsuleCenter1": Vector;
    "CapsuleCenter2": Vector;
    "CapsuleRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCollisionProperty(ptr_or_class: string|AnySDKClass): CCollisionProperty;