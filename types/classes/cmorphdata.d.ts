interface CMorphData {
    "Name": string;
    readonly "MorphRectDatas": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphData(ptr_or_class: string|AnySDKClass): CMorphData;