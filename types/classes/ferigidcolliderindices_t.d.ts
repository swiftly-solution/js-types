interface FeRigidColliderIndices_t {
    "TaperedCapsuleRigidIndex": number;
    "SphereRigidIndex": number;
    "BoxRigidIndex": number;
    "SDFRigidIndex": number;
    "CollisionPlaneIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeRigidColliderIndices_t(ptr_or_class: string|AnySDKClass): FeRigidColliderIndices_t;