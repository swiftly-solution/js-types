interface CColorCorrectionVolume {
    "Enabled": boolean;
    "MaxWeight": number;
    "FadeDuration": number;
    "StartDisabled": boolean;
    "Weight": number;
    "LookupFilename": string;
    "LastEnterWeight": number;
    "LastEnterTime": number;
    "LastExitWeight": number;
    "LastExitTime": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CColorCorrectionVolume(ptr_or_class: string|AnySDKClass): CColorCorrectionVolume;