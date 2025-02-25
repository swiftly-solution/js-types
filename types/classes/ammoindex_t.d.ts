interface AmmoIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AmmoIndex_t(ptr_or_class: string|AnySDKClass): AmmoIndex_t;