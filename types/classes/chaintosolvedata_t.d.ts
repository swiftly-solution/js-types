interface ChainToSolveData_t {
    "ChainIndex": number;
    readonly "SolverSettings": IKSolverSettings_t;
    readonly "TargetSettings": IKTargetSettings_t;
    "DebugSetting": number;
    "DebugNormalizedValue": number;
    "DebugOffset": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ChainToSolveData_t(ptr_or_class: string|AnySDKClass): ChainToSolveData_t;