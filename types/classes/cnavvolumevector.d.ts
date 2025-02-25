interface CNavVolumeVector {
    "HasBeenPreFiltered": boolean;
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeVector(ptr_or_class: string|AnySDKClass): CNavVolumeVector;