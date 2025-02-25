interface CExampleSchemaVData_PolymorphicBase {
    "Base": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_PolymorphicBase(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_PolymorphicBase;