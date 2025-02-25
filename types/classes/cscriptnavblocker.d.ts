interface CScriptNavBlocker {
    "Extent": Vector;
    readonly "Parent": CFuncNavBlocker;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptNavBlocker(ptr_or_class: string|AnySDKClass): CScriptNavBlocker;