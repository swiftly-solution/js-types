interface CastSphereSATParams_t {
    "RayStart": Vector;
    "RayDelta": Vector;
    "Radius": number;
    "MaxFraction": number;
    "Scale": number;
    readonly "Hull": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CastSphereSATParams_t(ptr_or_class: string|AnySDKClass): CastSphereSATParams_t;