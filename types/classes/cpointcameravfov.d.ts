interface CPointCameraVFOV {
    "VerticalFOV": number;
    readonly "Parent": CPointCamera;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointCameraVFOV(ptr_or_class: string|AnySDKClass): CPointCameraVFOV;