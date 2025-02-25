interface CAnimMorphDifference {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimMorphDifference(ptr_or_class: string|AnySDKClass): CAnimMorphDifference;