interface CPhysSlideConstraint {
    "AxisEnd": Vector;
    "SlideFriction": number;
    "SystemLoadScale": number;
    "InitialOffset": number;
    "EnableLinearConstraint": boolean;
    "EnableAngularConstraint": boolean;
    "MotorFrequency": number;
    "MotorDampingRatio": number;
    "UseEntityPivot": boolean;
    readonly "SoundInfo": ConstraintSoundInfo;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysSlideConstraint(ptr_or_class: string|AnySDKClass): CPhysSlideConstraint;