interface CTakeDamageResult {
    readonly "OriginatingInfo": CTakeDamageInfo;
    "HealthLost": number;
    "DamageTaken": number;
    "TotalledHealthLost": number;
    "TotalledDamageTaken": number;
    "TotalledDamageAbsorbed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTakeDamageResult(ptr_or_class: string|AnySDKClass): CTakeDamageResult;