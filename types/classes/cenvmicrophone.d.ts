interface CEnvMicrophone {
    "Disabled": boolean;
    readonly "MeasureTarget": CBaseEntity;
    "SoundType": number;
    "SoundFlags": number;
    "Sensitivity": number;
    "SmoothFactor": number;
    "MaxRange": number;
    "SpeakerName": string;
    readonly "Speaker": CBaseEntity;
    "AvoidFeedback": boolean;
    "SpeakerDSPPreset": number;
    "ListenFilter": string;
    readonly "ListenFilter1": CBaseFilter;
    readonly "OnRoutedSound": CEntityIOOutput;
    readonly "OnHeardSound": CEntityIOOutput;
    "LastSound": string;
    "LastRoutedFrame": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvMicrophone(ptr_or_class: string|AnySDKClass): CEnvMicrophone;