interface CPhysWheelConstraint {
    "SuspensionFrequency": number;
    "SuspensionDampingRatio": number;
    "SuspensionHeightOffset": number;
    "EnableSuspensionLimit": boolean;
    "MinSuspensionOffset": number;
    "MaxSuspensionOffset": number;
    "EnableSteeringLimit": boolean;
    "MinSteeringAngle": number;
    "MaxSteeringAngle": number;
    "SteeringAxisFriction": number;
    "SpinAxisFriction": number;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysWheelConstraint(ptr_or_class: string|AnySDKClass): CPhysWheelConstraint;