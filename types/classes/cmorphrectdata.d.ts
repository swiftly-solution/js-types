interface CMorphRectData {
    "XLeftDst": number;
    "YTopDst": number;
    "UWidthSrc": number;
    "VHeightSrc": number;
    readonly "BundleDatas": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphRectData(ptr_or_class: string|AnySDKClass): CMorphRectData;