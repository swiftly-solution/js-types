interface CFootCycleDefinition {
    "StancePositionMS": Vector;
    "MidpointPositionMS": Vector;
    "StanceDirectionMS": number;
    "ToStrideStartPos": Vector;
    readonly "StanceCycle": CAnimCycle;
    readonly "FootLiftCycle": CFootCycle;
    readonly "FootOffCycle": CFootCycle;
    readonly "FootStrikeCycle": CFootCycle;
    readonly "FootLandCycle": CFootCycle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootCycleDefinition(ptr_or_class: string|AnySDKClass): CFootCycleDefinition;