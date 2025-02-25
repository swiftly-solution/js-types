interface CBoneConstraintBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintBase(ptr_or_class: string|AnySDKClass): CBoneConstraintBase;