interface CSoundPatch {
    readonly "Pitch": CSoundEnvelope;
    readonly "Volume": CSoundEnvelope;
    "ShutdownTime": number;
    "LastTime": number;
    "SoundScriptName": string;
    readonly "Ent": any;
    "SoundEntityIndex": number;
    "SoundOrigin": Vector;
    "IsPlaying": number;
    readonly "Filter": CCopyRecipientFilter;
    "CloseCaptionDuration": number;
    "UpdatedSoundOrigin": boolean;
    "ClassName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundPatch(ptr_or_class: string|AnySDKClass): CSoundPatch;