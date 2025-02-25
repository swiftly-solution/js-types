interface CSplineConstraint {
    "AnchorOffsetRestore": Vector;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSplineConstraint(ptr_or_class: string|AnySDKClass): CSplineConstraint;