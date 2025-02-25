interface IKSolverSettings_t {
    "SolverType": number;
    "NumIterations": number;
    "EndEffectorRotationFixUpMode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKSolverSettings_t(ptr_or_class: string|AnySDKClass): IKSolverSettings_t;