interface constraint_hingeparams_t {
    "WorldPosition": Vector;
    "WorldAxisDirection": Vector;
    readonly "HingeAxis": constraint_axislimit_t;
    readonly "Constraint": constraint_breakableparams_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function constraint_hingeparams_t(ptr_or_class: string|AnySDKClass): constraint_hingeparams_t;