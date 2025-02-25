interface CConstraintAnchor {
    "MassScale": number;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstraintAnchor(ptr_or_class: string|AnySDKClass): CConstraintAnchor;