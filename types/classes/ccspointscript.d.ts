interface CCSPointScript {
    readonly "Parent": CCSPointScriptEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScript(ptr_or_class: string|AnySDKClass): CCSPointScript;