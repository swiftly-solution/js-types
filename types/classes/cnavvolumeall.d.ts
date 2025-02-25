interface CNavVolumeAll {
    readonly "Parent": CNavVolumeVector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeAll(ptr_or_class: string|AnySDKClass): CNavVolumeAll;