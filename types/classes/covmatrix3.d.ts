interface CovMatrix3 {
    "Diag": Vector;
    "XY": number;
    "XZ": number;
    "YZ": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CovMatrix3(ptr_or_class: string|AnySDKClass): CovMatrix3;