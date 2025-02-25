interface CAnimGraphNetworkSettings {
    "NetworkingEnabled": boolean;
    readonly "Parent": CAnimGraphSettingsGroup;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphNetworkSettings(ptr_or_class: string|AnySDKClass): CAnimGraphNetworkSettings;