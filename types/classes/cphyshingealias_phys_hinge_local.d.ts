interface CPhysHingeAlias_phys_hinge_local {
    readonly "Parent": CPhysHinge;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysHingeAlias_phys_hinge_local(ptr_or_class: string|AnySDKClass): CPhysHingeAlias_phys_hinge_local;