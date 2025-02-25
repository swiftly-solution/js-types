interface FeFitMatrix_t {
    "Center": Vector;
    "End": number;
    "Node": number;
    "BeginDynamic": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFitMatrix_t(ptr_or_class: string|AnySDKClass): FeFitMatrix_t;