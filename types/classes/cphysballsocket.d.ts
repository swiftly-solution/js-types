interface CPhysBallSocket {
    "JointFriction": number;
    "EnableSwingLimit": boolean;
    "SwingLimit": number;
    "EnableTwistLimit": boolean;
    "MinTwistAngle": number;
    "MaxTwistAngle": number;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysBallSocket(ptr_or_class: string|AnySDKClass): CPhysBallSocket;