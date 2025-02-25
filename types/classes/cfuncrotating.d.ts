interface CFuncRotating {
    readonly "OnStopped": CEntityIOOutput;
    readonly "OnStarted": CEntityIOOutput;
    readonly "OnReachedStart": CEntityIOOutput;
    "LocalRotationVector": Vector;
    "FanFriction": number;
    "Attenuation": number;
    "Volume": number;
    "TargetSpeed": number;
    "MaxSpeed": number;
    "BlockDamage": number;
    "NoiseRunning": string;
    "Reversed": boolean;
    "AccelDecel": boolean;
    "PrevLocalAngles": QAngle;
    "Start": QAngle;
    "StopAtStartPos": boolean;
    "ClientOrigin": Vector;
    "ClientAngles": QAngle;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncRotating(ptr_or_class: string|AnySDKClass): CFuncRotating;