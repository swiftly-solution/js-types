interface VPhysXJoint_t {
    "Type": number;
    "Body1": number;
    "Body2": number;
    "Flags": number;
    "EnableCollision": boolean;
    "EnableLinearLimit": boolean;
    readonly "LinearLimit": VPhysXRange_t;
    "EnableLinearMotor": boolean;
    "LinearTargetVelocity": Vector;
    "MaxForce": number;
    "EnableSwingLimit": boolean;
    readonly "SwingLimit": VPhysXRange_t;
    "EnableTwistLimit": boolean;
    readonly "TwistLimit": VPhysXRange_t;
    "EnableAngularMotor": boolean;
    "AngularTargetVelocity": Vector;
    "MaxTorque": number;
    "LinearFrequency": number;
    "LinearDampingRatio": number;
    "AngularFrequency": number;
    "AngularDampingRatio": number;
    "Friction": number;
    "Elasticity": number;
    "ElasticDamping": number;
    "Plasticity": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXJoint_t(ptr_or_class: string|AnySDKClass): VPhysXJoint_t;