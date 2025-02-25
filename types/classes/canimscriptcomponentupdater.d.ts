interface CAnimScriptComponentUpdater {
    readonly "Script": AnimScriptHandle;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimScriptComponentUpdater(ptr_or_class: string|AnySDKClass): CAnimScriptComponentUpdater;