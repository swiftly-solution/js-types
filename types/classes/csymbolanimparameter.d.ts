interface CSymbolAnimParameter {
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSymbolAnimParameter(ptr_or_class: string|AnySDKClass): CSymbolAnimParameter;