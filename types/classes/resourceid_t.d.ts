interface ResourceId_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ResourceId_t(ptr_or_class: string|AnySDKClass): ResourceId_t;