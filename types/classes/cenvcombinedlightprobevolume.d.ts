interface CEnvCombinedLightProbeVolume {
    "Entity_Color": Color;
    "Entity_flBrightness": number;
    "Entity_bCustomCubemapTexture": boolean;
    "Entity_vBoxMins": Vector;
    "Entity_vBoxMaxs": Vector;
    "Entity_bMoveable": boolean;
    "Entity_nHandshake": number;
    "Entity_nEnvCubeMapArrayIndex": number;
    "Entity_nPriority": number;
    "Entity_bStartDisabled": boolean;
    "Entity_flEdgeFadeDist": number;
    "Entity_vEdgeFadeDists": Vector;
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

declare function CEnvCombinedLightProbeVolume(ptr_or_class: string|AnySDKClass): CEnvCombinedLightProbeVolume;