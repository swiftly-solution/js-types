interface CExampleSchemaVData_PolymorphicDerivedB {
    "DerivedB": number;
    readonly "Parent": CExampleSchemaVData_PolymorphicBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_PolymorphicDerivedB(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_PolymorphicDerivedB;