interface CEnvTracer {
    "End": Vector;
    "Delay": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvTracer(ptr_or_class: string|AnySDKClass): CEnvTracer;