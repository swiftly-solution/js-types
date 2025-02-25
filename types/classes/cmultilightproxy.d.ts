interface CMultiLightProxy {
    "LightNameFilter": string;
    "LightClassFilter": string;
    "LightRadiusFilter": number;
    "BrightnessDelta": number;
    "PerformScreenFade": boolean;
    "TargetBrightnessMultiplier": number;
    "CurrentBrightnessMultiplier": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMultiLightProxy(ptr_or_class: string|AnySDKClass): CMultiLightProxy;