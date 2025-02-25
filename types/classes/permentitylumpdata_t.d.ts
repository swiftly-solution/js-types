interface PermEntityLumpData_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermEntityLumpData_t(ptr_or_class: string|AnySDKClass): PermEntityLumpData_t;