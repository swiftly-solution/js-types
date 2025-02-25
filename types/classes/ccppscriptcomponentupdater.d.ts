interface CCPPScriptComponentUpdater {
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCPPScriptComponentUpdater(ptr_or_class: string|AnySDKClass): CCPPScriptComponentUpdater;