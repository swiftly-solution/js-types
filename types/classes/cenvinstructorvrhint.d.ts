interface CEnvInstructorVRHint {
    "Name": string;
    "HintTargetEntity": string;
    "Timeout": number;
    "Caption": string;
    "StartSound": string;
    "LayoutFileType": number;
    "CustomLayoutFile": string;
    "AttachType": number;
    "HeightOffset": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvInstructorVRHint(ptr_or_class: string|AnySDKClass): CEnvInstructorVRHint;