interface NavGravity_t {
    "Gravity": Vector;
    "Default": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NavGravity_t(ptr_or_class: string|AnySDKClass): NavGravity_t;