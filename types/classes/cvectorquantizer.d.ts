interface CVectorQuantizer {
    readonly "CentroidVectors": Object;
    "Centroids": number;
    "Dimensions": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVectorQuantizer(ptr_or_class: string|AnySDKClass): CVectorQuantizer;