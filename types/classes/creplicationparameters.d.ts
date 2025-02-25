interface CReplicationParameters {
    "ReplicationMode": number;
    "ScaleChildParticleRadii": boolean;
    readonly "MinRandomRadiusScale": CParticleCollectionFloatInput;
    readonly "MaxRandomRadiusScale": CParticleCollectionFloatInput;
    readonly "ModellingScale": CParticleCollectionFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CReplicationParameters(ptr_or_class: string|AnySDKClass): CReplicationParameters;