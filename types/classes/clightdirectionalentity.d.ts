interface CLightDirectionalEntity {
    readonly "Parent": CLightEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightDirectionalEntity(ptr_or_class: string|AnySDKClass): CLightDirectionalEntity;