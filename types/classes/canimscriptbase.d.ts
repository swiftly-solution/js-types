interface CAnimScriptBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimScriptBase(ptr_or_class: string|AnySDKClass): CAnimScriptBase;