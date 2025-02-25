interface CEnvWind {
    readonly "EnvWindShared": CEnvWindShared;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvWind(ptr_or_class: string|AnySDKClass): CEnvWind;