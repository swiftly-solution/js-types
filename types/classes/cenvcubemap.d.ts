interface CEnvCubemap {
    "Entity_bCustomCubemapTexture": boolean;
    "Entity_flInfluenceRadius": number;
    "Entity_vBoxProjectMins": Vector;
    "Entity_vBoxProjectMaxs": Vector;
    "Entity_bMoveable": boolean;
    "Entity_nHandshake": number;
    "Entity_nEnvCubeMapArrayIndex": number;
    "Entity_nPriority": number;
    "Entity_flEdgeFadeDist": number;
    "Entity_vEdgeFadeDists": Vector;
    "Entity_flDiffuseScale": number;
    "Entity_bStartDisabled": boolean;
    "Entity_bDefaultEnvMap": boolean;
    "Entity_bDefaultSpecEnvMap": boolean;
    "Entity_bIndoorCubeMap": boolean;
    "Entity_bCopyDiffuseFromDefaultCubemap": boolean;
    "Entity_bEnabled": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvCubemap(ptr_or_class: string|AnySDKClass): CEnvCubemap;