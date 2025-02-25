interface CTriggerSoundscape {
    readonly "Soundscape": CEnvSoundscapeTriggerable;
    "SoundscapeName": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerSoundscape(ptr_or_class: string|AnySDKClass): CTriggerSoundscape;