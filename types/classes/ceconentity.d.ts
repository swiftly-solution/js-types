interface CEconEntity {
    readonly "AttributeManager": CAttributeContainer;
    "OriginalOwnerXuidLow": number;
    "OriginalOwnerXuidHigh": number;
    "FallbackPaintKit": number;
    "FallbackSeed": number;
    "FallbackWear": number;
    "FallbackStatTrak": number;
    readonly "OldProvidee": CBaseEntity;
    "OldOwnerClass": number;
    readonly "Parent": CBaseFlex;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEconEntity(ptr_or_class: string|AnySDKClass): CEconEntity;