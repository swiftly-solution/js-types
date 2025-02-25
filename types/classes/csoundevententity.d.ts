interface CSoundEventEntity {
    "StartOnSpawn": boolean;
    "ToLocalPlayer": boolean;
    "StopOnNew": boolean;
    "SaveRestore": boolean;
    "SavedIsPlaying": boolean;
    "SavedElapsedTime": number;
    "SourceEntityName": string;
    "AttachmentName": string;
    readonly "OnSoundFinished": CEntityIOOutput;
    "ClientCullRadius": number;
    "SoundName": string;
    readonly "Source": CEntityInstance;
    "EntityIndexSelection": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventEntity(ptr_or_class: string|AnySDKClass): CSoundEventEntity;