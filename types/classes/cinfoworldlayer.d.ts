interface CInfoWorldLayer {
    readonly "OutputOnEntitiesSpawned": CEntityIOOutput;
    "WorldName": string;
    "LayerName": string;
    "WorldLayerVisible": boolean;
    "EntitiesSpawned": boolean;
    "CreateAsChildSpawnGroup": boolean;
    "LayerSpawnGroup": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoWorldLayer(ptr_or_class: string|AnySDKClass): CInfoWorldLayer;