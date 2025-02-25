interface CVirtualAnimParameter {
    "ExpressionString": string;
    "ParamType": number;
    readonly "Parent": CAnimParameterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVirtualAnimParameter(ptr_or_class: string|AnySDKClass): CVirtualAnimParameter;