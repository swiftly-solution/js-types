interface CCopyRecipientFilter {
    "Flags": number;
    readonly "Recipients": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCopyRecipientFilter(ptr_or_class: string|AnySDKClass): CCopyRecipientFilter;