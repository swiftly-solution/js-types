interface JiggleBoneSettings_t {
    "BoneIndex": number;
    "SpringStrength": number;
    "MaxTimeStep": number;
    "Damping": number;
    "BoundsMaxLS": Vector;
    "BoundsMinLS": Vector;
    "SimSpace": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function JiggleBoneSettings_t(ptr_or_class: string|AnySDKClass): JiggleBoneSettings_t;