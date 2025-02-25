interface CEconWearable {
    "ForceSkin": number;
    "AlwaysAllow": boolean;
    readonly "Parent": CEconEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEconWearable(ptr_or_class: string|AnySDKClass): CEconWearable;