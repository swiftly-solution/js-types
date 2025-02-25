interface FeSimdSpringIntegrator_t {
    "SpringRestLength": number;
    "SpringConstant": number;
    "SpringDamping": number;
    "NodeWeight0": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdSpringIntegrator_t(ptr_or_class: string|AnySDKClass): FeSimdSpringIntegrator_t;