interface CNetworkedSequenceOperation {
    "Sequence": number;
    "PrevCycle": number;
    "Cycle": number;
    "Weight": number;
    "SequenceChangeNetworked": boolean;
    "Discontinuity": boolean;
    "PrevCycleFromDiscontinuity": number;
    "PrevCycleForAnimEventDetection": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkedSequenceOperation(ptr_or_class: string|AnySDKClass): CNetworkedSequenceOperation;