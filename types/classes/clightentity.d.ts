interface CLightEntity {
    readonly "CLightComponent": CLightComponent;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightEntity(ptr_or_class: string|AnySDKClass): CLightEntity;