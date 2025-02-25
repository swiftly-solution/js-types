interface CMorphBundleData {
    "ULeftSrc": number;
    "VTopSrc": number;
    readonly "Offsets": Object;
    readonly "Ranges": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphBundleData(ptr_or_class: string|AnySDKClass): CMorphBundleData;