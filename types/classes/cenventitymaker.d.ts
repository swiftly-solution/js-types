interface CEnvEntityMaker {
    "EntityMins": Vector;
    "EntityMaxs": Vector;
    readonly "CurrentInstance": CBaseEntity;
    readonly "CurrentBlocker": CBaseEntity;
    "BlockerOrigin": Vector;
    "PostSpawnDirection": QAngle;
    "PostSpawnDirectionVariance": number;
    "PostSpawnSpeed": number;
    "PostSpawnUseAngles": boolean;
    "Template": string;
    readonly "OutputOnSpawned": CEntityIOOutput;
    readonly "OutputOnFailedSpawn": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvEntityMaker(ptr_or_class: string|AnySDKClass): CEnvEntityMaker;