interface CSoundOpvarSetPointEntity {
    readonly "OnEnter": CEntityIOOutput;
    readonly "OnExit": CEntityIOOutput;
    "AutoDisable": boolean;
    "DistanceMin": number;
    "DistanceMax": number;
    "DistanceMapMin": number;
    "DistanceMapMax": number;
    "OcclusionRadius": number;
    "OcclusionMin": number;
    "OcclusionMax": number;
    "ValSetOnDisable": number;
    "SetValueOnDisable": boolean;
    "Reloading": boolean;
    "SimulationMode": number;
    "VisibilitySamples": number;
    "DynamicProxyPoint": Vector;
    "DynamicMaximumOcclusion": number;
    readonly "DynamicEntity": CEntityInstance;
    "DynamicEntityName": string;
    "PathingDistanceNormFactor": number;
    "PathingSourcePos": Vector;
    "PathingListenerPos": Vector;
    "PathingDirection": Vector;
    "PathingSourceIndex": number;
    readonly "Parent": CSoundOpvarSetPointBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetPointEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetPointEntity;