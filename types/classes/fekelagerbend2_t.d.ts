interface FeKelagerBend2_t {
    "Weight": Object;
    "Height0": number;
    "Node": Object;
    "Reserved": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeKelagerBend2_t(ptr_or_class: string|AnySDKClass): FeKelagerBend2_t;