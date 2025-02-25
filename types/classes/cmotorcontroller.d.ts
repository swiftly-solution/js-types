interface CMotorController {
    "Speed": number;
    "MaxTorque": number;
    "Axis": Vector;
    "InertiaFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotorController(ptr_or_class: string|AnySDKClass): CMotorController;