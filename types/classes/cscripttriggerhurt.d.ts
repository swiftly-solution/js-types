interface CScriptTriggerHurt {
    "Extent": Vector;
    readonly "Parent": CTriggerHurt;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerHurt(ptr_or_class: string|AnySDKClass): CScriptTriggerHurt;