interface CIntAnimParameter {
    "DefaultValue": number;
    "MinValue": number;
    "MaxValue": number;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CIntAnimParameter(ptr_or_class: string|AnySDKClass): CIntAnimParameter;