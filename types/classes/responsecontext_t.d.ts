interface ResponseContext_t {
    "Name": string;
    "Value": string;
    "ExpirationTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ResponseContext_t(ptr_or_class: string|AnySDKClass): ResponseContext_t;