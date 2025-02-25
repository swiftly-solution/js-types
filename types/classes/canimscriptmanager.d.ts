interface CAnimScriptManager {
    readonly "ScriptInfo": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimScriptManager(ptr_or_class: string|AnySDKClass): CAnimScriptManager;