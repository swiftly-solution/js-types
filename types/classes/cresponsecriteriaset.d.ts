interface CResponseCriteriaSet {
    "NumPrefixedContexts": number;
    "OverrideOnAppend": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CResponseCriteriaSet(ptr_or_class: string|AnySDKClass): CResponseCriteriaSet;