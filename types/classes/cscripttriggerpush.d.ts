interface CScriptTriggerPush {
    "Extent": Vector;
    readonly "Parent": CTriggerPush;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerPush(ptr_or_class: string|AnySDKClass): CScriptTriggerPush;