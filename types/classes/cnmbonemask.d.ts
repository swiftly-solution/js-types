interface CNmBoneMask {
    readonly "WeightInfo": any;
    readonly "Weights": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBoneMask(ptr_or_class: string|AnySDKClass): CNmBoneMask;