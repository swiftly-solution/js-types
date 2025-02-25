interface CTakeDamageInfoAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTakeDamageInfoAPI(ptr_or_class: string|AnySDKClass): CTakeDamageInfoAPI;