interface StanceInfo_t {
    "Position": Vector;
    "Direction": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function StanceInfo_t(ptr_or_class: string|AnySDKClass): StanceInfo_t;