interface CPrecipitation {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPrecipitation(ptr_or_class: string|AnySDKClass): CPrecipitation;