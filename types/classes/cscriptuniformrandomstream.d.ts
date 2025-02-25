interface CScriptUniformRandomStream {
    "InitialSeed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptUniformRandomStream(ptr_or_class: string|AnySDKClass): CScriptUniformRandomStream;