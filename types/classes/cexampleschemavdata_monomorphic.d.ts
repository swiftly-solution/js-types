interface CExampleSchemaVData_Monomorphic {
    "Example1": number;
    "Example2": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_Monomorphic(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_Monomorphic;