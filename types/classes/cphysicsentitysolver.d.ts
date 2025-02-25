interface CPhysicsEntitySolver {
    readonly "MovingEntity": CBaseEntity;
    readonly "PhysicsBlocker": CBaseEntity;
    "SeparationDuration": number;
    "CancelTime": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsEntitySolver(ptr_or_class: string|AnySDKClass): CPhysicsEntitySolver;