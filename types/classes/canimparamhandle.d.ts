interface CAnimParamHandle {
    "Type": number;
    "Index": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimParamHandle(ptr_or_class: string|AnySDKClass): CAnimParamHandle;