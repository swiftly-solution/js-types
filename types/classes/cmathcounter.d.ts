interface CMathCounter {
    "Min": number;
    "Max": number;
    "HitMin": boolean;
    "HitMax": boolean;
    "Disabled": boolean;
    readonly "OnHitMin": CEntityIOOutput;
    readonly "OnHitMax": CEntityIOOutput;
    readonly "OnChangedFromMin": CEntityIOOutput;
    readonly "OnChangedFromMax": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMathCounter(ptr_or_class: string|AnySDKClass): CMathCounter;