interface VMapResourceData_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMapResourceData_t(ptr_or_class: string|AnySDKClass): VMapResourceData_t;