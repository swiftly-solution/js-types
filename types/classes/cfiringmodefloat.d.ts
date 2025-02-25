interface CFiringModeFloat {
    "Values": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFiringModeFloat(ptr_or_class: string|AnySDKClass): CFiringModeFloat;