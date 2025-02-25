interface AmmoTypeInfo_t {
    "MaxCarry": number;
    readonly "SplashSize": CRangeInt;
    "Flags": number;
    "Mass": number;
    readonly "Speed": CRangeFloat;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AmmoTypeInfo_t(ptr_or_class: string|AnySDKClass): AmmoTypeInfo_t;