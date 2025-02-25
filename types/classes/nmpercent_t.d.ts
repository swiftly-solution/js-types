interface NmPercent_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmPercent_t(ptr_or_class: string|AnySDKClass): NmPercent_t;