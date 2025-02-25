interface CNavVolumeSphericalShell {
    "RadiusInner": number;
    readonly "Parent": CNavVolumeSphere;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeSphericalShell(ptr_or_class: string|AnySDKClass): CNavVolumeSphericalShell;