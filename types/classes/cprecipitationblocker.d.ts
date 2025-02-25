interface CPrecipitationBlocker {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPrecipitationBlocker(ptr_or_class: string|AnySDKClass): CPrecipitationBlocker;