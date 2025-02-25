interface CNavVolume {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolume(ptr_or_class: string|AnySDKClass): CNavVolume;