interface EntInput_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntInput_t(ptr_or_class: string|AnySDKClass): EntInput_t;