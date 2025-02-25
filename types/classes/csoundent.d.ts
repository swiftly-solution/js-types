interface CSoundEnt {
    "FreeSound": number;
    "ActiveSound": number;
    "CLastActiveSounds": number;
    readonly "SoundPool": Object;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEnt(ptr_or_class: string|AnySDKClass): CSoundEnt;