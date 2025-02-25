interface FeCtrlOffset_t {
    "Offset": Vector;
    "CtrlParent": number;
    "CtrlChild": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCtrlOffset_t(ptr_or_class: string|AnySDKClass): FeCtrlOffset_t;