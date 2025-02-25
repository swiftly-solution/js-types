interface constraint_axislimit_t {
    "MinRotation": number;
    "MaxRotation": number;
    "MotorTargetAngSpeed": number;
    "MotorMaxTorque": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function constraint_axislimit_t(ptr_or_class: string|AnySDKClass): constraint_axislimit_t;