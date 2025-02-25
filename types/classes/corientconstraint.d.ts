interface COrientConstraint {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COrientConstraint(ptr_or_class: string|AnySDKClass): COrientConstraint;