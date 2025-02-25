interface CTriggerVolume {
    "FilterName": string;
    readonly "Filter": CBaseFilter;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerVolume(ptr_or_class: string|AnySDKClass): CTriggerVolume;