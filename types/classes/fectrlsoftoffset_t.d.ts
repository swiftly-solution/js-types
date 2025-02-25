interface FeCtrlSoftOffset_t {
    "CtrlParent": number;
    "CtrlChild": number;
    "Offset": Vector;
    "Alpha": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCtrlSoftOffset_t(ptr_or_class: string|AnySDKClass): FeCtrlSoftOffset_t;