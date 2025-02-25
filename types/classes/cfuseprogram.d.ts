interface CFuseProgram {
    readonly "ProgramBuffer": Object;
    readonly "VariablesRead": Object;
    readonly "VariablesWritten": Object;
    "MaxTempVarsUsed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuseProgram(ptr_or_class: string|AnySDKClass): CFuseProgram;