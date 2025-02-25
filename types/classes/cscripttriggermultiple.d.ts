interface CScriptTriggerMultiple {
    "Extent": Vector;
    readonly "Parent": CTriggerMultiple;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerMultiple(ptr_or_class: string|AnySDKClass): CScriptTriggerMultiple;