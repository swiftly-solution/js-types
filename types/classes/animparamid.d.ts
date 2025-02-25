interface AnimParamID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimParamID(ptr_or_class: string|AnySDKClass): AnimParamID;