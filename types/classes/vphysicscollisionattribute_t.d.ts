interface VPhysicsCollisionAttribute_t {
    "InteractsAs": number;
    "InteractsWith": number;
    "InteractsExclude": number;
    "EntityId": number;
    "OwnerId": number;
    "HierarchyId": number;
    "CollisionGroup": number;
    "CollisionFunctionMask": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysicsCollisionAttribute_t(ptr_or_class: string|AnySDKClass): VPhysicsCollisionAttribute_t;