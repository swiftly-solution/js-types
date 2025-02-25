interface ParticleNamedValueSource_t {
    "Name": string;
    "IsPublic": boolean;
    "ValueType": any;
    readonly "DefaultConfig": ParticleNamedValueConfiguration_t;
    readonly "NamedConfigs": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleNamedValueSource_t(ptr_or_class: string|AnySDKClass): ParticleNamedValueSource_t;