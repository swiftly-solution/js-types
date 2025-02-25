interface WeightList {
    "Name": string;
    readonly "Weights": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WeightList(ptr_or_class: string|AnySDKClass): WeightList;