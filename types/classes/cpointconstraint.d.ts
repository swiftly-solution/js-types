interface CPointConstraint {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointConstraint(ptr_or_class: string|AnySDKClass): CPointConstraint;