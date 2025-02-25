interface FeCtrlOsOffset_t {
    "CtrlParent": number;
    "CtrlChild": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCtrlOsOffset_t(ptr_or_class: string|AnySDKClass): FeCtrlOsOffset_t;