interface CFiringModeInt {
    "Values": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFiringModeInt(ptr_or_class: string|AnySDKClass): CFiringModeInt;