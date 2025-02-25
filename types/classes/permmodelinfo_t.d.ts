interface PermModelInfo_t {
    "Flags": number;
    "HullMin": Vector;
    "HullMax": Vector;
    "ViewMin": Vector;
    "ViewMax": Vector;
    "Mass": number;
    "EyePosition": Vector;
    "MaxEyeDeflection": number;
    "SurfaceProperty": string;
    "KeyValueText": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermModelInfo_t(ptr_or_class: string|AnySDKClass): PermModelInfo_t;