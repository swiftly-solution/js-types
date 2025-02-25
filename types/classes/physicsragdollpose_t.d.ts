interface PhysicsRagdollPose_t {
    readonly "Owner": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PhysicsRagdollPose_t(ptr_or_class: string|AnySDKClass): PhysicsRagdollPose_t;