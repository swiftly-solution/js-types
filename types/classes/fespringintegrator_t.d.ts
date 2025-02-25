interface FeSpringIntegrator_t {
    "Node": Object;
    "SpringRestLength": number;
    "SpringConstant": number;
    "SpringDamping": number;
    "NodeWeight0": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSpringIntegrator_t(ptr_or_class: string|AnySDKClass): FeSpringIntegrator_t;