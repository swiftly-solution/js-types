interface CEnvSoundscapeProxy {
    "MainSoundscapeName": string;
    readonly "Parent": CEnvSoundscape;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeProxy(ptr_or_class: string|AnySDKClass): CEnvSoundscapeProxy;