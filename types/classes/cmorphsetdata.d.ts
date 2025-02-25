interface CMorphSetData {
    "Width": number;
    "Height": number;
    readonly "BundleTypes": Object;
    readonly "MorphDatas": Object;
    readonly "FlexDesc": Object;
    readonly "FlexControllers": Object;
    readonly "FlexRules": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphSetData(ptr_or_class: string|AnySDKClass): CMorphSetData;