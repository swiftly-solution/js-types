interface CLogicMeasureMovement {
    "StrMeasureTarget": string;
    "StrMeasureReference": string;
    "StrTargetReference": string;
    readonly "MeasureTarget": CBaseEntity;
    readonly "MeasureReference": CBaseEntity;
    readonly "Target": CBaseEntity;
    readonly "TargetReference": CBaseEntity;
    "Scale": number;
    "MeasureType": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicMeasureMovement(ptr_or_class: string|AnySDKClass): CLogicMeasureMovement;