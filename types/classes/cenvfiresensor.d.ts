interface CEnvFireSensor {
    "Enabled": boolean;
    "HeatAtLevel": boolean;
    "Radius": number;
    "TargetLevel": number;
    "TargetTime": number;
    "LevelTime": number;
    readonly "OnHeatLevelStart": CEntityIOOutput;
    readonly "OnHeatLevelEnd": CEntityIOOutput;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvFireSensor(ptr_or_class: string|AnySDKClass): CEnvFireSensor;