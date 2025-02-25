interface CLogicAutosave {
    "ForceNewLevelUnit": boolean;
    "MinHitPoints": number;
    "MinHitPointsToCommit": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicAutosave(ptr_or_class: string|AnySDKClass): CLogicAutosave;