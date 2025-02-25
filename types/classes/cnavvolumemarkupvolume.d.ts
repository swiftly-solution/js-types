interface CNavVolumeMarkupVolume {
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeMarkupVolume(ptr_or_class: string|AnySDKClass): CNavVolumeMarkupVolume;