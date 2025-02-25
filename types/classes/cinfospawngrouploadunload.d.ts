interface CInfoSpawnGroupLoadUnload {
    readonly "OnSpawnGroupLoadStarted": CEntityIOOutput;
    readonly "OnSpawnGroupLoadFinished": CEntityIOOutput;
    readonly "OnSpawnGroupUnloadStarted": CEntityIOOutput;
    readonly "OnSpawnGroupUnloadFinished": CEntityIOOutput;
    "SpawnGroupName": string;
    "SpawnGroupFilterName": string;
    "LandmarkName": string;
    "FixedSpawnGroupName": string;
    "TimeoutInterval": number;
    "StreamingStarted": boolean;
    "UnloadingStarted": boolean;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoSpawnGroupLoadUnload(ptr_or_class: string|AnySDKClass): CInfoSpawnGroupLoadUnload;