interface CPhysHinge {
    readonly "SoundInfo": ConstraintSoundInfo;
    readonly "NotifyMinLimitReached": CEntityIOOutput;
    readonly "NotifyMaxLimitReached": CEntityIOOutput;
    "AtMinLimit": boolean;
    "AtMaxLimit": boolean;
    readonly "Hinge": constraint_hingeparams_t;
    "HingeFriction": number;
    "SystemLoadScale": number;
    "IsAxisLocal": boolean;
    "MinRotation": number;
    "MaxRotation": number;
    "InitialRotation": number;
    "MotorFrequency": number;
    "MotorDampingRatio": number;
    "AngleSpeed": number;
    "AngleSpeedThreshold": number;
    readonly "OnStartMoving": CEntityIOOutput;
    readonly "OnStopMoving": CEntityIOOutput;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysHinge(ptr_or_class: string|AnySDKClass): CPhysHinge;