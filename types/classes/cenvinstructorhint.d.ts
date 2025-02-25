interface CEnvInstructorHint {
    "Name": string;
    "Replace_Key": string;
    "HintTargetEntity": string;
    "Timeout": number;
    "DisplayLimit": number;
    "Icon_Onscreen": string;
    "Icon_Offscreen": string;
    "Caption": string;
    "ActivatorCaption": string;
    "Color": Color;
    "IconOffset": number;
    "Range": number;
    "PulseOption": number;
    "AlphaOption": number;
    "ShakeOption": number;
    "Static": boolean;
    "NoOffscreen": boolean;
    "ForceCaption": boolean;
    "InstanceType": number;
    "SuppressRest": boolean;
    "Binding": string;
    "AllowNoDrawTarget": boolean;
    "AutoStart": boolean;
    "LocalPlayerOnly": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvInstructorHint(ptr_or_class: string|AnySDKClass): CEnvInstructorHint;