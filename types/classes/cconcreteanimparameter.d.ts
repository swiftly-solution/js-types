interface CConcreteAnimParameter {
    "PreviewButton": number;
    "NetworkSetting": number;
    "UseMostRecentValue": boolean;
    "AutoReset": boolean;
    "GameWritable": boolean;
    "GraphWritable": boolean;
    readonly "Parent": CAnimParameterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConcreteAnimParameter(ptr_or_class: string|AnySDKClass): CConcreteAnimParameter;