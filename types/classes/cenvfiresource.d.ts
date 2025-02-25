interface CEnvFireSource {
    "Enabled": boolean;
    "Radius": number;
    "Damage": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvFireSource(ptr_or_class: string|AnySDKClass): CEnvFireSource;