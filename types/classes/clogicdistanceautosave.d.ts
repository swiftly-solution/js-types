interface CLogicDistanceAutosave {
    "TargetEntity": string;
    "DistanceToPlayer": number;
    "ForceNewLevelUnit": boolean;
    "CheckCough": boolean;
    "ThinkDangerous": boolean;
    "DangerousTime": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicDistanceAutosave(ptr_or_class: string|AnySDKClass): CLogicDistanceAutosave;