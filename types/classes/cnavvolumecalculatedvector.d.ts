interface CNavVolumeCalculatedVector {
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeCalculatedVector(ptr_or_class: string|AnySDKClass): CNavVolumeCalculatedVector;