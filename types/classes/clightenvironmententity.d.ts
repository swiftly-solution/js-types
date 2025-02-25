interface CLightEnvironmentEntity {
    readonly "Parent": CLightDirectionalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightEnvironmentEntity(ptr_or_class: string|AnySDKClass): CLightEnvironmentEntity;