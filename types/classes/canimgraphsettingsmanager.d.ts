interface CAnimGraphSettingsManager {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphSettingsManager(ptr_or_class: string|AnySDKClass): CAnimGraphSettingsManager;