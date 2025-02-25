interface CMathColorBlend {
    "InMin": number;
    "InMax": number;
    "OutColor1": Color;
    "OutColor2": Color;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMathColorBlend(ptr_or_class: string|AnySDKClass): CMathColorBlend;