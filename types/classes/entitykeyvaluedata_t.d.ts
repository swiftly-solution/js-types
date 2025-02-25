interface EntityKeyValueData_t {
    readonly "Connections": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntityKeyValueData_t(ptr_or_class: string|AnySDKClass): EntityKeyValueData_t;