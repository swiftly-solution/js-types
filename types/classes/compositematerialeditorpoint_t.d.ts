interface CompositeMaterialEditorPoint_t {
    "SequenceIndex": number;
    "Cycle": number;
    "EnableChildModel": boolean;
    readonly "CompositeMaterialAssemblyProcedures": Object;
    readonly "CompositeMaterials": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialEditorPoint_t(ptr_or_class: string|AnySDKClass): CompositeMaterialEditorPoint_t;