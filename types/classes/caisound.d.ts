interface CAISound {
    "SoundType": number;
    "SoundFlags": number;
    "Volume": number;
    "SoundIndex": number;
    "Duration": number;
    "ProxyEntityName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAISound(ptr_or_class: string|AnySDKClass): CAISound;