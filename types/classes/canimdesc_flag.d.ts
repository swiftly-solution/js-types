interface CAnimDesc_Flag {
    "Looping": boolean;
    "AllZeros": boolean;
    "Hidden": boolean;
    "Delta": boolean;
    "LegacyWorldspace": boolean;
    "ModelDoc": boolean;
    "ImplicitSeqIgnoreDelta": boolean;
    "AnimGraphAdditive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDesc_Flag(ptr_or_class: string|AnySDKClass): CAnimDesc_Flag;