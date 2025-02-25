interface CWaterSplasher {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWaterSplasher(ptr_or_class: string|AnySDKClass): CWaterSplasher;