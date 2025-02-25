interface EntOutput_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntOutput_t(ptr_or_class: string|AnySDKClass): EntOutput_t;