interface CParentConstraint {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParentConstraint(ptr_or_class: string|AnySDKClass): CParentConstraint;