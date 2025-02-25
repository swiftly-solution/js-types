interface ActiveModelConfig_t {
    readonly "Handle": ModelConfigHandle_t;
    "Name": string;
    readonly "AssociatedEntityNames": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ActiveModelConfig_t(ptr_or_class: string|AnySDKClass): ActiveModelConfig_t;