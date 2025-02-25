interface hudtextparms_t {
    "Color1": Color;
    "Color2": Color;
    "Effect": number;
    "Channel": number;
    "X": number;
    "Y": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function hudtextparms_t(ptr_or_class: string|AnySDKClass): hudtextparms_t;