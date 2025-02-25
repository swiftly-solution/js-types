interface CEnvSoundscapeTriggerableAlias_snd_soundscape_triggerable {
    readonly "Parent": CEnvSoundscapeTriggerable;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeTriggerableAlias_snd_soundscape_triggerable(ptr_or_class: string|AnySDKClass): CEnvSoundscapeTriggerableAlias_snd_soundscape_triggerable;