interface CEnumAnimParameter {
    "DefaultValue": number;
    readonly "EnumOptions": Object;
    readonly "EnumReferenced": Object;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnumAnimParameter(ptr_or_class: string|AnySDKClass): CEnumAnimParameter;