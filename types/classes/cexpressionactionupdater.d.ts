interface CExpressionActionUpdater {
    readonly "Param": CAnimParamHandle;
    "ParamType": number;
    readonly "Script": AnimScriptHandle;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExpressionActionUpdater(ptr_or_class: string|AnySDKClass): CExpressionActionUpdater;