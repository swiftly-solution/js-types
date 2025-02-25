interface CFloatAnimParameter {
    "DefaultValue": number;
    "MinValue": number;
    "MaxValue": number;
    "Interpolate": boolean;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFloatAnimParameter(ptr_or_class: string|AnySDKClass): CFloatAnimParameter;