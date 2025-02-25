interface CPointGamestatsCounter {
    "StrStatisticName": string;
    "Disabled": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointGamestatsCounter(ptr_or_class: string|AnySDKClass): CPointGamestatsCounter;