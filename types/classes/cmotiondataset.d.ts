interface CMotionDataSet {
    readonly "Groups": Object;
    "DimensionCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionDataSet(ptr_or_class: string|AnySDKClass): CMotionDataSet;