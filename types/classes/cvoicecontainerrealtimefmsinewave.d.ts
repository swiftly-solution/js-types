interface CVoiceContainerRealtimeFMSineWave {
    "CarrierFrequency": number;
    "ModulatorFrequency": number;
    "ModulatorAmount": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerRealtimeFMSineWave(ptr_or_class: string|AnySDKClass): CVoiceContainerRealtimeFMSineWave;