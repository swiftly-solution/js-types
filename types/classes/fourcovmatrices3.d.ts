interface FourCovMatrices3 {
    "XY": number;
    "XZ": number;
    "YZ": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FourCovMatrices3(ptr_or_class: string|AnySDKClass): FourCovMatrices3;