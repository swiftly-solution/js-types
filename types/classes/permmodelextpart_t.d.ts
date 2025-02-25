interface PermModelExtPart_t {
    "Name": string;
    "Parent": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermModelExtPart_t(ptr_or_class: string|AnySDKClass): PermModelExtPart_t;