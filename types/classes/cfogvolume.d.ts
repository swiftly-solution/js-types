interface CFogVolume {
    "FogName": string;
    "PostProcessName": string;
    "ColorCorrectionName": string;
    "Disabled": boolean;
    "InFogVolumesList": boolean;
    readonly "Parent": CServerOnlyModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFogVolume(ptr_or_class: string|AnySDKClass): CFogVolume;