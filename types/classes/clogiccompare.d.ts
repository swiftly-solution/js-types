interface CLogicCompare {
    "InValue": number;
    "CompareValue": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicCompare(ptr_or_class: string|AnySDKClass): CLogicCompare;