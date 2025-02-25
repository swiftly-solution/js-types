interface CLightOrthoEntity {
    readonly "Parent": CLightEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightOrthoEntity(ptr_or_class: string|AnySDKClass): CLightOrthoEntity;