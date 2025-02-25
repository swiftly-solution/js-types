interface CLightSpotEntity {
    readonly "Parent": CLightEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightSpotEntity(ptr_or_class: string|AnySDKClass): CLightSpotEntity;