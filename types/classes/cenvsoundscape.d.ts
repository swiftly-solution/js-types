interface CEnvSoundscape {
    readonly "OnPlay": CEntityIOOutput;
    "Radius": number;
    "SoundEventName": string;
    "OverrideWithEvent": boolean;
    "SoundscapeIndex": number;
    "SoundscapeEntityListId": number;
    "PositionNames": Object;
    readonly "ProxySoundscape": CEnvSoundscape;
    "Disabled": boolean;
    "SoundscapeName": string;
    "SoundEventHash": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscape(ptr_or_class: string|AnySDKClass): CEnvSoundscape;