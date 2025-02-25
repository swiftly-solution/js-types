interface CBoolAnimParameter {
    "DefaultValue": boolean;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoolAnimParameter(ptr_or_class: string|AnySDKClass): CBoolAnimParameter;