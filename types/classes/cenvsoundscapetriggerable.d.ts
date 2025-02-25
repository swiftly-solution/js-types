interface CEnvSoundscapeTriggerable {
    readonly "Parent": CEnvSoundscape;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeTriggerable(ptr_or_class: string|AnySDKClass): CEnvSoundscapeTriggerable;