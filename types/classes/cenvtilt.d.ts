interface CEnvTilt {
    "Duration": number;
    "Radius": number;
    "TiltTime": number;
    "StopTime": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvTilt(ptr_or_class: string|AnySDKClass): CEnvTilt;