interface CBaseConstraint {
    "Name": string;
    "UpVector": Vector;
    readonly "Targets": Object;
    readonly "Parent": CBoneConstraintBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseConstraint(ptr_or_class: string|AnySDKClass): CBaseConstraint;