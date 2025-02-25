interface CEnvSoundscapeAlias_snd_soundscape {
    readonly "Parent": CEnvSoundscape;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeAlias_snd_soundscape(ptr_or_class: string|AnySDKClass): CEnvSoundscapeAlias_snd_soundscape;