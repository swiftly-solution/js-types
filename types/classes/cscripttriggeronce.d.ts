interface CScriptTriggerOnce {
    "Extent": Vector;
    readonly "Parent": CTriggerOnce;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerOnce(ptr_or_class: string|AnySDKClass): CScriptTriggerOnce;