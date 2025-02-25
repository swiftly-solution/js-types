interface VMixFreeverbDesc_t {
    "RoomSize": number;
    "Damp": number;
    "Width": number;
    "LateReflections": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixFreeverbDesc_t(ptr_or_class: string|AnySDKClass): VMixFreeverbDesc_t;