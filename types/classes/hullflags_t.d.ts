interface HullFlags_t {
    "Hull_Human": boolean;
    "Hull_SmallCentered": boolean;
    "Hull_WideHuman": boolean;
    "Hull_Tiny": boolean;
    "Hull_Medium": boolean;
    "Hull_TinyCentered": boolean;
    "Hull_Large": boolean;
    "Hull_LargeCentered": boolean;
    "Hull_MediumTall": boolean;
    "Hull_Small": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function HullFlags_t(ptr_or_class: string|AnySDKClass): HullFlags_t;