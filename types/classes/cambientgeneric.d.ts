interface CAmbientGeneric {
    "Radius": number;
    "MaxRadius": number;
    "SoundLevel": number;
    readonly "Dpv": dynpitchvol_t;
    "Active": boolean;
    "Looping": boolean;
    "Sound": string;
    "SourceEntName": string;
    readonly "SoundSource": CBaseEntity;
    "SoundSourceEntIndex": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAmbientGeneric(ptr_or_class: string|AnySDKClass): CAmbientGeneric;