interface CExampleSchemaVData_PolymorphicDerivedA {
    "DerivedA": number;
    readonly "Parent": CExampleSchemaVData_PolymorphicBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_PolymorphicDerivedA(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_PolymorphicDerivedA;