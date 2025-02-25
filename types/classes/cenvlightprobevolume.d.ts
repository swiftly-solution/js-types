interface CEnvLightProbeVolume {
    "Entity_vBoxMins": Vector;
    "Entity_vBoxMaxs": Vector;
    "Entity_bMoveable": boolean;
    "Entity_nHandshake": number;
    "Entity_nPriority": number;
    "Entity_bStartDisabled": boolean;
    "Entity_nLightProbeSizeX": number;
    "Entity_nLightProbeSizeY": number;
    "Entity_nLightProbeSizeZ": number;
    "Entity_nLightProbeAtlasX": number;
    "Entity_nLightProbeAtlasY": number;
    "Entity_nLightProbeAtlasZ": number;
    "Entity_bEnabled": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvLightProbeVolume(ptr_or_class: string|AnySDKClass): CEnvLightProbeVolume;