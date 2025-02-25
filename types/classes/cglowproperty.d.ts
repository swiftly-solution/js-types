interface CGlowProperty {
    "GlowColor": Vector;
    "GlowType": number;
    "GlowTeam": number;
    "GlowRange": number;
    "GlowRangeMin": number;
    "GlowColorOverride": Color;
    "Flashing": boolean;
    "GlowTime": number;
    "GlowStartTime": number;
    "EligibleForScreenHighlight": boolean;
    "Glowing": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGlowProperty(ptr_or_class: string|AnySDKClass): CGlowProperty;