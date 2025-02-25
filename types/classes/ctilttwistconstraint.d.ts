interface CTiltTwistConstraint {
    "TargetAxis": number;
    "SlaveAxis": number;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTiltTwistConstraint(ptr_or_class: string|AnySDKClass): CTiltTwistConstraint;