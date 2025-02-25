interface CRandomNumberGeneratorParameters {
    "DistributeEvenly": boolean;
    "Seed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRandomNumberGeneratorParameters(ptr_or_class: string|AnySDKClass): CRandomNumberGeneratorParameters;