interface CSpinUpdateBase {
    readonly "Parent": CParticleFunctionOperator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpinUpdateBase(ptr_or_class: string|AnySDKClass): CSpinUpdateBase;