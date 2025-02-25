interface WorldNodeOnDiskBufferData_t {
    "ElementCount": number;
    "ElementSizeInBytes": number;
    readonly "InputLayoutFields": Object;
    readonly "Data": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WorldNodeOnDiskBufferData_t(ptr_or_class: string|AnySDKClass): WorldNodeOnDiskBufferData_t;