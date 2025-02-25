interface ModelConfigHandle_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelConfigHandle_t(ptr_or_class: string|AnySDKClass): ModelConfigHandle_t;