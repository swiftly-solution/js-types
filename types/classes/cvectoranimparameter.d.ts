interface CVectorAnimParameter {
    "DefaultValue": Vector;
    "Interpolate": boolean;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVectorAnimParameter(ptr_or_class: string|AnySDKClass): CVectorAnimParameter;