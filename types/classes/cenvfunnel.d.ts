interface CEnvFunnel {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvFunnel(ptr_or_class: string|AnySDKClass): CEnvFunnel;