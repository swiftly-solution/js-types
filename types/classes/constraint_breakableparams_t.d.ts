interface constraint_breakableparams_t {
    "Strength": number;
    "ForceLimit": number;
    "TorqueLimit": number;
    "BodyMassScale": Object;
    "IsActive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function constraint_breakableparams_t(ptr_or_class: string|AnySDKClass): constraint_breakableparams_t;