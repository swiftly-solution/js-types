interface CAnimEventDefinition {
    "Frame": number;
    "EndFrame": number;
    "Cycle": number;
    "Duration": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventDefinition(ptr_or_class: string|AnySDKClass): CAnimEventDefinition;