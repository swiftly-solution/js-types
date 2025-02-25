interface CNavVolumeSphere {
    "Center": Vector;
    "Radius": number;
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeSphere(ptr_or_class: string|AnySDKClass): CNavVolumeSphere;