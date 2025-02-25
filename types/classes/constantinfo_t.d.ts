interface ConstantInfo_t {
    "Name": string;
    "NameToken": number;
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ConstantInfo_t(ptr_or_class: string|AnySDKClass): ConstantInfo_t;