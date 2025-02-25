interface CEnvShake {
    "LimitToEntity": string;
    "Amplitude": number;
    "Frequency": number;
    "Duration": number;
    "Radius": number;
    "StopTime": number;
    "NextShake": number;
    "CurrentAmp": number;
    "MaxForce": Vector;
    readonly "ShakeCallback": CPhysicsShake;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvShake(ptr_or_class: string|AnySDKClass): CEnvShake;