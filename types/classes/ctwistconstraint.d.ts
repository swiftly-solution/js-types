interface CTwistConstraint {
    "Inverse": boolean;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTwistConstraint(ptr_or_class: string|AnySDKClass): CTwistConstraint;