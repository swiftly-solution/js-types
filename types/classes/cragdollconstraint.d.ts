interface CRagdollConstraint {
    "Xmin": number;
    "Xmax": number;
    "Ymin": number;
    "Ymax": number;
    "Zmin": number;
    "Zmax": number;
    "Xfriction": number;
    "Yfriction": number;
    "Zfriction": number;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollConstraint(ptr_or_class: string|AnySDKClass): CRagdollConstraint;