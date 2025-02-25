interface CAnimUpdateSharedData {
    readonly "Settings": CAnimGraphSettingsManager;
    readonly "RootNodePath": CAnimNodePath;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUpdateSharedData(ptr_or_class: string|AnySDKClass): CAnimUpdateSharedData;