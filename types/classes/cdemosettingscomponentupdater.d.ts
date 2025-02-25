interface CDemoSettingsComponentUpdater {
    readonly "Settings": CAnimDemoCaptureSettings;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDemoSettingsComponentUpdater(ptr_or_class: string|AnySDKClass): CDemoSettingsComponentUpdater;