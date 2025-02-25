interface ModelReference_t {
    "RelativeProbabilityOfSpawn": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelReference_t(ptr_or_class: string|AnySDKClass): ModelReference_t;