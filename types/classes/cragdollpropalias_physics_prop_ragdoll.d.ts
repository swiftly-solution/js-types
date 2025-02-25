interface CRagdollPropAlias_physics_prop_ragdoll {
    readonly "Parent": CRagdollProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollPropAlias_physics_prop_ragdoll(ptr_or_class: string|AnySDKClass): CRagdollPropAlias_physics_prop_ragdoll;