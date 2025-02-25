interface CEnvSoundscapeProxyAlias_snd_soundscape_proxy {
    readonly "Parent": CEnvSoundscapeProxy;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeProxyAlias_snd_soundscape_proxy(ptr_or_class: string|AnySDKClass): CEnvSoundscapeProxyAlias_snd_soundscape_proxy;