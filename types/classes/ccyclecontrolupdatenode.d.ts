interface CCycleControlUpdateNode {
    "ValueSource": number;
    readonly "ParamIndex": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCycleControlUpdateNode(ptr_or_class: string|AnySDKClass): CCycleControlUpdateNode;