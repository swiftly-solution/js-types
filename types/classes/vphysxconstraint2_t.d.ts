interface VPhysXConstraint2_t {
    "Flags": number;
    "Parent": number;
    "Child": number;
    readonly "Params": VPhysXConstraintParams_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXConstraint2_t(ptr_or_class: string|AnySDKClass): VPhysXConstraint2_t;