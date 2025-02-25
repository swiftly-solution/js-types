interface CEnvEntityIgniter {
    "Lifetime": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvEntityIgniter(ptr_or_class: string|AnySDKClass): CEnvEntityIgniter;