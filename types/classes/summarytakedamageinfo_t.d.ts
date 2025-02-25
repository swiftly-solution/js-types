interface SummaryTakeDamageInfo_t {
    "SummarisedCount": number;
    readonly "Info": CTakeDamageInfo;
    readonly "Result": CTakeDamageResult;
    readonly "Target": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SummaryTakeDamageInfo_t(ptr_or_class: string|AnySDKClass): SummaryTakeDamageInfo_t;