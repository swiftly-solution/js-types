interface CCycleControlClipUpdateNode {
    readonly "Tags": Object;
    "Sequence": number;
    "Duration": number;
    "ValueSource": number;
    readonly "ParamIndex": CAnimParamHandle;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCycleControlClipUpdateNode(ptr_or_class: string|AnySDKClass): CCycleControlClipUpdateNode;