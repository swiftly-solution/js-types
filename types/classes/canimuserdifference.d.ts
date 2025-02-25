interface CAnimUserDifference {
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUserDifference(ptr_or_class: string|AnySDKClass): CAnimUserDifference;