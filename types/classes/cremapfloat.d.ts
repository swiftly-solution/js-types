interface CRemapFloat {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRemapFloat(ptr_or_class: string|AnySDKClass): CRemapFloat;